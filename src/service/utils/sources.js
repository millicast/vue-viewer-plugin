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
    name: sourceId === null ? 'Main' : sourceId,
    sourceId,
    trackId,
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
      if (selectedMediaSource.name === 'none') {
        commit('Sources/setSelectedSource', {
          kind,
          selectedSource: source,
        })
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
  let selectedSource =
    kind === 'video'
      ? state.Sources.selectedVideoSource
      : state.Sources.selectedAudioSource
  let sourcesToUse =
    kind === 'video' ? state.Sources.videoSources : state.Sources.audioSources
  sourcesToUse = sourcesToUse.filter((source) => source.sourceId !== sourceId)
  if (sourceId === selectedSource.sourceId) {
    if (sourcesToUse.findIndex((source) => source.sourceId === null) !== -1) {
      selectedSource = sourcesToUse[0]
    } else {
      selectedSource = { name: 'none', sourceId: 0 }
    }
  }
  commit('Sources/removeSourceRemoteTrack', sourceId)
  commit('Sources/setSources', { kind, sources: sourcesToUse })
  handleSelectSource({ kind, source: selectedSource })
}

export const handleSelectSource = async ({ kind, source }) => {
  let track = null
  let selectedSource = null

  if (kind === 'video') {
    layers.deleteLayers()
    track = state.ViewConnection.trackEvent.video.track
    selectedSource = state.Sources.selectedAudioSource
  } else if (kind === 'audio') {
    track = state.ViewConnection.trackEvent.audio.track
    selectedSource = state.Sources.selectedVideoSource
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

  if (
    source.name !== 'none' &&
    !(sourceId === null && !sources.length) &&
    !state.Controls.castIsConnected
  ) {
    const mediaId = transceiver?.mid ?? null

    await state.ViewConnection.millicastView.project(sourceId, [
      {
        trackId: source.trackId,
        mediaId,
      },
    ])
  } else if (state.Controls.castIsConnected) {
    sendLoadRequest()
  } else {
    await handleSelectSource({ kind, source })
  }
}

export const handleProjectVideo = async (what, where, index) => {
  let sideLabel = 'sideLabel' + where
  document.getElementById(sideLabel).textContent = what ?? 'Main'
  await state.ViewConnection.millicastView.project(what, [
    {
      trackId: state.Sources.videoSources[index].trackId,
      mediaId: where,
    },
  ])
}

export const handleProjectRemoteTracks = async (index) => {
  await nextTick()
  const newSourceRemoteTrackIndex = index
  const vidId =
    index +
    state.Sources.videoSources.length -
    state.Sources.sourceRemoteTracks.length
  if (newSourceRemoteTrackIndex < 0) return
  const sidePlayerId =
    'sidePlayer' +
    state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].sourceId
  document.getElementById(sidePlayerId).srcObject =
    state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].mediaStream
  handleProjectVideo(
    state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].sourceId,
    state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].transceiver
      ?.mid ?? null,
    vidId
  )
  document.getElementById(sidePlayerId).muted = true
  document.getElementById(sidePlayerId).play()
}
