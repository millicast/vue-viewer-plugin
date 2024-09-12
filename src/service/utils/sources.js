import { nextTick } from 'vue'
import store from '../../store'
const { commit, state, getters } = store
import { sendLoadRequest } from './cast'
import * as layers from './layers'
import gsap from 'gsap';
import { Flip } from "gsap/Flip";
import { setVideoPlayer } from '../sdkManager'

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

const addRemoteTracks = async (newSourceId) => {
  const sourceId = newSourceId || getters['Sources/getStartedAsMain']
  if (!getters['Sources/getVideoHasMain'] && newSourceId && !getters['Sources/getStartedAsMain']) {
    commit('Sources/setStartedAsMain', newSourceId)
    commit('Sources/setMainLabel', newSourceId)
    state.ViewConnection.millicastView.project(newSourceId,[{mediaId: '0',media: 'video'}])
    return
  }
  if (!newSourceId) {
    state.ViewConnection.millicastView.project(null,[{mediaId: '0',media: 'video'}])
    commit('Sources/setStartedAsMain', newSourceId)
    if (state.Sources.videoSources.length === 0) {
      return
    }
    const remoteSideIndex = state.Sources.sourceSideTracks.findIndex(
      (t) => t.sourceId === sourceId
    )
    if (remoteSideIndex >= 0) {
      const side = state.Sources.sourceSideTracks[remoteSideIndex]
      const transceiver = {
        name: state.Params.viewer.mainLabel ,
        sourceId: null,
        trackId: 'video',
        mid: '0'
      }
      side.sourceId = null
      side.transceiver = transceiver
    }
  }
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
        what: sourceRemoteTrack,
        where: remoteTrackIndex,
      })
    } else {
      commit('Sources/addSourceRemoteTrack', sourceRemoteTrack)
      commit('Sources/addSourceSideTrack', sourceRemoteTrack)
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
  const mid = sourceId === null ? (kind === 'video' ? "0" : "1") : null
  const source = {
    name: sourceId === null ? state.Params.viewer.mainLabel : sourceId,
    sourceId,
    trackId,
    mid
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
        if (kind === 'audio' || state.Sources.selectedVideoSource.name === 'none') {
          handleSelectSource({ kind, source })
        }
        if (kind === 'video') {
          const key = getKeyByValue('0')
          if ( key == 0) {
            commit('Sources/setMainLabel', state.Params.viewer.mainLabel)
            handleSelectSource({ kind, source })
          } else {
            const sideSpan = document.getElementById(`sideLabel${key}`)
            sideSpan.textContent = state.Params.viewer.mainLabel
          }
        }
      }
    } else {
      if (kind === 'audio' || state.Sources.selectedVideoSource.name === 'none' || (getters['Sources/getStartedAsMain'] === source.name)) {
        handleSelectSource({ kind, source })
      }
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
  if (state.Layers.mainTransceiverMedias?.active.length) {
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

const deleteSource = async (kind, sourceId) => {
  let selectedSource =
    kind === 'video'
      ? state.Sources.selectedVideoSource
      : state.Sources.selectedAudioSource
  let sourcesToUse =
    kind === 'video' ? state.Sources.videoSources : state.Sources.audioSources
  sourcesToUse = sourcesToUse.filter((source) => source.sourceId !== sourceId)
  let replace
  if (kind === 'video') {
    let newSource = { ...sourcesToUse[0] }
    const isSameSource = selectedSource.sourceId === sourceId
    const isMainLabel = newSource.name === state.Sources.mainLabel
    const needsNewSource = !sourceId && isMainLabel
    if (needsNewSource) {
      newSource = { ...sourcesToUse[1] }
    }
    if (Object.keys(newSource).length > 0) {
      if (isSameSource) {
        if (!sourceId) {
          handleProjectVideo(newSource.sourceId, state.Sources.selectedVideoSource.mid, state.Sources.selectedVideoSource.trackId)
          commit('Sources/setMainLabel', newSource.name)
          commit('Sources/setSelectedSource', { kind, selectedSource: newSource })
          newSource.mid = "0"
          const transceiver = { ...state.Sources.transceiverSourceState[newSource.mid], mid: "0" }
          replace = {
            mediaStream: state.Sources.stream,
            sourceId: newSource.sourceId,
            transceiver: transceiver
          }
          commit('Sources/updateMainMediaTraks', { 
            what: replace,
            sourceId: newSource.sourceId
          })
        } else {
          await switchProject(newSource, false)
        }
      } else if (!sourceId) {
        handleProjectVideo(newSource.sourceId, "0", state.Sources.selectedVideoSource.trackId)
        const transceiver = { ...state.Sources.transceiverSourceState[newSource.mid], mid: "0" }
        replace = {
          mediaStream: state.Sources.stream,
          sourceId: newSource.sourceId,
          transceiver: transceiver
        }
        commit('Sources/updateMainMediaTraks', { 
          what: replace,
          sourceId: newSource.sourceId
        })
      }
    }
    commit('Sources/setStartedAsMain', newSource.sourceId)
    if (!replace) {
      commit('Sources/removeSourceSideTrack', sourceId || newSource.sourceId)
    }
    commit('Sources/removeSourceRemoteTrack', sourceId || newSource.sourceId)
    commit('Sources/removeTransceiverSourceState', { sourceId, replace })
  }
  if (replace) {
    commit('Sources/removeSourceAndUpdateMain', { sourceId: replace.sourceId })
  } else {
    commit('Sources/removeSource', { kind, sourceId })
  }
}

export const handleSelectSource = async ({ kind, source }) => {
  let track = null
  let selectedSource = null
  if (kind === 'audio') {
    track = state.ViewConnection.trackEvent.audio.track
    selectedSource = state.Sources.selectedVideoSource
    selectedSource = state.Sources.selectedAudioSource
    if (source && source?.name !== 'none' && track) {
      await project({ kind, source })
      if (selectedSource.name !== 'none') {
        commit('Controls/setTrackWarning', false)
      }
    }
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
  sources = state.Sources.audioSources
  transceiver = state.ViewConnection.trackEvent?.audio?.transceiver

  if (state.Controls.castIsConnected) {
    sendLoadRequest()
  } else if (!(sourceId === null && !sources.length)) {
    const mediaId = transceiver?.mid ?? "1"
    await state.ViewConnection.millicastView.project(sourceId, [
      {
        mediaId,
        ...(kind === 'video' && { promote: true }),
        media: kind
      },
    ])
  }
}

const getKeyByValue = (valueToFind) => {
  for (let key in state.Sources.trackMId) {
    if (state.Sources.trackMId[key] === valueToFind) {
      return key
    }
  }
  return null
}

export const switchSourcesGrid = async (source) => {
  if (!state.Controls.isMainVideoFullScreen) {
    await switchProject(source, false)
  }
  commit('Controls/setIsMainVideoFullScreen', !state.Controls.isMainVideoFullScreen)
}

export const switchProject = async (sourceToSwitch, animation) => {
  const key = getKeyByValue(sourceToSwitch.mid)
  const videoMid = sourceToSwitch.mid
  const midProjectedInMain = state.Sources.selectedVideoSource.mid
  commit('Sources/setTrackMId', {key: 0, value: sourceToSwitch.mid})
  commit('Sources/setTrackMId', { key: key, value: state.Sources.selectedVideoSource.mid || '0' })
  const sideSpan = document.getElementById(`sideLabel${key}`)
  const remoteTrackIndex = state.Sources.sourceSideTracks.findIndex(source => source.sourceId === sourceToSwitch.sourceId)
  let sourceRemoteTrack
  if (midProjectedInMain === '0') {
    sourceRemoteTrack = {
      mediaStream: state.Sources.stream,
      sourceId: null,
      transceiver: state.Sources.transceiverSourceState[0],
    }
  } else {
    sourceRemoteTrack = state.Sources.sourceRemoteTracks.find(source => source.sourceId === state.Sources.selectedVideoSource.sourceId)
  }
  commit('Sources/replaceSourceSideTrack', {
    what: sourceRemoteTrack,
    where: remoteTrackIndex,
  })
  sideSpan.textContent = state.Sources.selectedVideoSource.name || state.Params.viewer.mainLabel
  let lowQualityLayer
  if (midProjectedInMain in state.Layers.medias) {
    lowQualityLayer = state.Layers.medias[midProjectedInMain].layers.slice(-1)[0]
  }
  let selectedQualityLayer
  if (videoMid in state.Layers.medias && state.Layers.selectedQuality?.simulcastIdx !== undefined) {
    const selectedTranciverMedias = state.Layers.medias[videoMid]
    commit('Layers/setMainTransceiverMedias', selectedTranciverMedias)
    const mediaSelected = selectedTranciverMedias.layers.find(layer => layer.simulcastIdx === state.Layers.selectedQuality.simulcastIdx)
    selectedQualityLayer = {
      encodingId: mediaSelected?.encodingId,
      spatialLayerId: mediaSelected?.spatialLayerId,
      temporalLayerId: mediaSelected?.temporalLayerId
    }
  }
  const layers = {
    encodingId: lowQualityLayer?.encodingId,
    spatialLayerId: lowQualityLayer?.spatialLayerId,
    temporalLayerId: lowQualityLayer?.temporalLayerId
  }
  if (!state.Controls.isGrid) {
    handleProjectVideo(
      sourceToSwitch.sourceId, 
      videoMid,
      sourceToSwitch.trackId, 
      selectedQualityLayer,
      !selectedQualityLayer,
    )
    handleProjectVideo(
      state.Sources.selectedVideoSource.sourceId, 
      midProjectedInMain, 
      state.Sources.selectedVideoSource.trackId, 
      layers,
      false,
    )
  }
  await swapVideos(`sidePlayer${key}`, animation)
  await handleSelectSource({ kind: 'video', source: sourceToSwitch })
  await commit('Sources/setMainLabel', sourceToSwitch.name)
}

const swapVideos = async (id, animation = state.Sources.animate) => {
  gsap.registerPlugin(Flip);
  const currentElementRef = 'player'
  const mainSource = document.getElementById('main-source');
  const playerVideo = mainSource.querySelector('video');
  const sideVideo = document.getElementById(id);
  const statePlayer = Flip.getState(playerVideo);
  const stateSide = Flip.getState(sideVideo);
  const sideParent = sideVideo.parentElement;
  sideParent.insertBefore(playerVideo, sideVideo.nextSibling);
  const playerParent  = document.getElementById('main-source');
  const spanElement = playerParent.querySelector('span')
  playerParent.insertBefore(sideVideo, spanElement);
  playerVideo.id = playerVideo.ref = id
  sideVideo.id = sideVideo.ref = currentElementRef
  setVideoPlayer({ videoPlayer: sideVideo, srcObject: sideVideo.srcObject })
  const duration = animation ? 0.8 : 0
  Flip.from(statePlayer, {duration, ease: "power1.inOut"});
  Flip.from(stateSide, {duration, ease: "power1.inOut"});
}


export const handleProjectVideo = async (what, where, trackId, layer, promote) => {
  await state.ViewConnection.millicastView.project(what, [
    {
      // trackId,
      mediaId: where,
      media: 'video',
      layer,
      promote
    },
  ])
}

export const handleProjectRemoteTracks = async ({ remoteTrack, index }) => {
  await nextTick()
  let remoteIndex = index || remoteTrack.transceiver?.mid
  if (index != null) {
    let sourceIndex = state.Sources.sourceRemoteTracks[index]
    remoteIndex = sourceIndex.transceiver?.mid
    const sideLabelId = `sideLabel${remoteIndex}`
    const sidePlayerLabel = document.getElementById(sideLabelId)
    sidePlayerLabel.textContent = remoteTrack.sourceId || state.Params.viewer.mainLabel
    commit('Sources/setTrackMId', { key: remoteIndex, value: remoteTrack?.transceiver?.mid })
    const playerVideo = document.getElementById(`videoText${remoteIndex}`);
    const videoId = playerVideo.querySelector('video');
    videoId.id = `sidePlayer${remoteIndex}`
  }
  const maxLayerHeight = state.Params.viewer.maxHeight ? Number(state.Params.viewer.maxHeight) : null
  const sidePlayerId = `sidePlayer${remoteIndex}`
  const sidePlayerVideo = document.getElementById(sidePlayerId)
  sidePlayerVideo.srcObject = remoteTrack.mediaStream
  if (index == null) {
    handleProjectVideo(
      remoteTrack.sourceId, 
      remoteIndex ?? null, 
      state.Sources.transceiverSourceState[remoteIndex].trackId,
      maxLayerHeight ? { maxHeight: maxLayerHeight } : null
    )
  }
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
