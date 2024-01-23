import { nextTick } from 'vue'
import store from '../../store'
const { commit, state, getters } = store
import { sendLoadRequest } from './cast'
import * as layers from './layers'

export const getTracks = (data) => {
  const sourceId = data.sourceId || null
  data.tracks.forEach((e) => {
    if (e.media === 'video') {
      addRemoteTracks(sourceId)
      addSource('video', sourceId, e.trackId)
      if (state.Sources.videoSources.length === 1) {
        commit('Sources/setIsAudioOnly', false)
      }
    }
    if (e.media === 'audio') {
      addSource('audio', sourceId, e.trackId)
      if (state.Sources.audioSources.length === 1) {
        commit(
          'Sources/setIsAudioOnly',
          state.Sources.videoSources.length ? false : true
        )
      }
    }
  })
  if (tracksAvailableAndMainNotExists()) {
    setTimeout(processTrackWarning, 1000)
  } else if (state.Controls.trackWarning) {
    commit('Controls/setTrackWarning', false)
  }
}

const addRemoteTracks = async (sourceId) => {
  if (!sourceId) return
  const remoteTrackIndex = state.Sources.sourceRemoteTracks.findIndex(
    (t) => t.sourceId === sourceId
  )
  const mediaStream = new MediaStream()
  setTimeout(async () => {
    const transceiver = await state.ViewConnection.millicastView.addRemoteTrack(
      'video',
      [mediaStream]
    )
    const sourceRemoteTrack = {
      transceiver,
      mediaStream,
      sourceId,
    }
    if (remoteTrackIndex !== -1) {
      commit('Sources/replaceSourceRemoteTrack', {
        sourceRemoteTrack,
        remoteTrackIndex,
      })
    } else {
      commit('Sources/addSourceRemoteTrack', sourceRemoteTrack)
    }
  }, 50) //We have to set a timeout because it takes a while before the millicastView signaling instance changes on migrate.
}

const tracksAvailableAndMainNotExists = () => {
  return (
    (!getters['Sources/getVideoHasMain'] &&
      state.Sources.videoSources.length) ||
    (!getters['Sources/getAudioHasMain'] && state.Sources.audioSources.length)
  )
}

const addSource = (kind, sourceId, trackId) => {
  const source = {
    name: sourceId === null ? state.Params.viewer.mainLabel : sourceId,
    sourceId,
    trackId,
    mid: sourceId === null ? (kind === 'video' ? "0" : "1") : null
  }
  const sourceToUse =
    kind === 'video' ? state.Sources.videoSources : state.Sources.audioSources
  let sources = Array.from(sourceToUse)
  if (!sources.some((e) => e.sourceId === source.sourceId)) {
    if (source.sourceId === null) {
      sources.unshift(source)
      const selectedMediaSource =
        kind === 'video'
          ? state.Sources.selectedVideoSource
          : state.Sources.selectedAudioSource
      if (selectedMediaSource.name !== state.Params.viewer.mainLabel) {
        commit('Sources/setSelectedSource', {
          kind,
          selectedSource: source,
        })
        handleSelectSource({ kind, source })
        commit('Sources/setMainLabel', state.Params.viewer.mainLabel)
      }
    } else {
      sources.push(source)
    }
    commit('Sources/setSources', { kind, sources })
  }
}

const processTrackWarning = () => {
  if (tracksAvailableAndMainNotExists() && !state.Sources.trackWarning) {
    if (state.Controls.dropup === '') {
      commit('Controls/setDropup', 'settings')
    }
    commit('Controls/setTrackWarning', true)
  }
}

export const handleDeleteSource = (sourceId) => {
  if (state.Layers.mainTransceiverMedias.active.length) {
    // If stream has simulcast enabled, set the source quality to auto before droping the source
    layers.handleSelectQuality({name: 'Auto'})
  }
  const videoIndex = state.Sources.videoSources.findIndex(
    (source) => source.sourceId === sourceId
  )
  const audioIndex = state.Sources.audioSources.findIndex(
    (source) => source.sourceId === sourceId
  )
  if (videoIndex !== -1) {
    deleteSource('video', sourceId)
    if (!state.Sources.videoSources.length) {
      commit('Sources/setIsAudioOnly', true)
    }
  }
  if (audioIndex !== -1) {
    deleteSource('audio', sourceId)
  }
}

const deleteSource = (kind, sourceId) => {
  let sourceCurrentMid
  let sourceInitialMid
  let selectedSource =
    kind === 'video'
      ? state.Sources.selectedVideoSource
      : state.Sources.selectedAudioSource
  let sourcesToUse =
    kind === 'video' ? state.Sources.videoSources : state.Sources.audioSources
  sourcesToUse = sourcesToUse.filter((source) => source.sourceId !== sourceId)

  if (!sourcesToUse.length) {
    selectedSource = {
      name: 'none',
    }
  } else if (sourceId === selectedSource.sourceId || sourceId === null) {
    selectedSource = sourcesToUse[0]

    if (!state.Sources.isAudioOnly) {
      commit('Sources/setMainLabel', sourcesToUse[0].name)
    }
  }

  if (kind === 'video') {
    sourceCurrentMid = Object.keys(state.Sources.transceiverSourceState).find(key => state.Sources.transceiverSourceState[key].sourceId === sourceId)
    if (sourceId !== null) {
      sourceInitialMid = Object.values(state.Sources.sourceRemoteTracks).find(value => value.sourceId === sourceId).transceiver.mid
    }

    if (state.Controls.isSplittedView) {
      if (state.Sources.selectedVideoSource.sourceId !== null && sourceId === null) {
        handleProjectVideo(state.Sources.selectedVideoSource.sourceId, `${sourceCurrentMid}`, state.Sources.selectedVideoSource.trackId)
        if (state.Params.viewer.showLabels) {
          document.getElementById(`sideLabel${state.Sources.selectedVideoSource.mid}`).textContent = state.Sources.selectedVideoSource.sourceId
        }
      } else if (state.Sources.selectedVideoSource.sourceId === null && sourceId !== null) {
        if (sourceCurrentMid !== sourceInitialMid) {
          handleProjectVideo(state.Sources.transceiverSourceState[sourceInitialMid].sourceId, state.Sources.transceiverSourceState[sourceCurrentMid].mid)
          if (state.Params.viewer.showLabels) {
            document.getElementById(`sideLabel${state.Sources.transceiverSourceState[sourceCurrentMid].mid}`).textContent = state.Sources.transceiverSourceState[sourceInitialMid].sourceId
          }
        }
      } else if (state.Sources.selectedVideoSource.sourceId !== null && sourceId !== null && sourceCurrentMid !== sourceInitialMid) {
        handleProjectVideo(state.Sources.transceiverSourceState[sourceInitialMid].sourceId, state.Sources.selectedVideoSource.mid)
        if (state.Params.viewer.showLabels) {
          document.getElementById(`sideLabel${state.Sources.transceiverSourceState[state.Sources.selectedVideoSource.mid].mid}`).textContent = state.Sources.transceiverSourceState[sourceInitialMid].sourceId
        }
      }
    }

    commit('Sources/removeTransceiverSourceState', sourceId)
    commit('Sources/removeTrackIdMidMapping', sourceCurrentMid)
  }

  commit('Sources/removeSourceRemoteTrack', sourceId)
  commit('Sources/removeSource', { kind, sourceId: sourceId })
  handleSelectSource({ kind, source: selectedSource })
}

export const handleSelectSource = async ({ kind, source }) => {
  let track = null
  let selectedSource = null

  if (kind === 'video') {
    layers.deleteLayers()
    track = state.ViewConnection.trackEvent.video.track
    selectedSource = state.Sources.selectedVideoSource
  } else if (kind === 'audio') {
    track = state.ViewConnection.trackEvent.audio.track
    selectedSource = state.Sources.selectedVideoSource
    selectedSource = state.Sources.selectedAudioSource
  }
  commit('Sources/setSelectedSource', { kind, selectedSource: source })
  if (source && source?.name !== 'none' && track) {
    await project({ kind, source })
    if (selectedSource.name !== 'none') {
      commit('Controls/setTrackWarning', false)
    }
  }
}

const project = async ({ kind, source }) => {
  const sourceId = source?.sourceId
  let sources = null
  let transceiver = null
  if (kind === 'video') {
    sources = state.Sources.videoSources
    transceiver = state.ViewConnection.trackEvent?.video?.transceiver
  } else if (kind === 'audio') {
    sources = state.Sources.audioSources
    transceiver = state.ViewConnection.trackEvent?.audio?.transceiver
  }

  if (state.Controls.castIsConnected) {
    sendLoadRequest()
  } else if (!(sourceId === null && !sources.length)) {
    const mediaId = transceiver?.mid ?? null

    await state.ViewConnection.millicastView.project(sourceId, [
      {
        trackId: source.trackId,
        mediaId,
        ...(kind === 'video' && { promote: true }),
        media: kind
      },
    ])
  }
}

export const handleProjectVideo = async (what, where, trackId, layer) => {
  await state.ViewConnection.millicastView.project(what, [
    {
      trackId,
      mediaId: where,
      media: 'video',
      layer
    },
  ])
}

export const handleProjectRemoteTracks = async (remoteTrack) => {
  await nextTick()
  const sidePlayerId = 'sidePlayer' + remoteTrack.transceiver?.mid
  const sidePlayerVideo = document.getElementById(sidePlayerId)
  sidePlayerVideo.srcObject = remoteTrack.mediaStream
  handleProjectVideo(
    remoteTrack.sourceId, 
    remoteTrack.transceiver?.mid ?? null, 
    state.Sources.transceiverSourceState[remoteTrack.transceiver?.mid].trackId
  )
  sidePlayerVideo.muted = true
  sidePlayerVideo.autoPlay = true
  sidePlayerVideo.playsInline = true
  sidePlayerVideo.play()
}

export const handleUnprojectMultiview = async () => {
  const mids = state.ViewConnection.millicastView.webRTCPeer.peer.getTransceivers()
    .splice(2).map((vt) => { return vt.mid })
  state.ViewConnection.millicastView.unproject(mids)
}