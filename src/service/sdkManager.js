import { Logger } from '@millicast/sdk'

import * as params from './utils/params'
import * as viewConnection from './utils/viewConnection'
import * as sources from './utils/sources'
import * as layers from './utils/layers'
import * as cast from './utils/cast'

//Import Vuex Store.
import store from '../store'
const { commit, state } = store
let selectingLayerTimeout = null


// VIDEO PLAYER

// Similar logic to playerChange event
export const setVideoPlayer = ({
  videoPlayer,
  srcObject,
  volume,
  muted,
  autoplay,
  drmAudio
}) => {
  if (videoPlayer) {
    commit('Controls/setVideo', videoPlayer)
    commit('Controls/setCurrentElementRef', videoPlayer.id)
  }
  if (drmAudio) {
    commit('Controls/setDrmAudio', drmAudio)
  }
  if (srcObject && !state.Params.viewer.drm) {
    commit('Controls/setVideoSource', srcObject)
  }
  if (volume) commit('Controls/setVideoVolume', volume)
  if (muted) commit('Controls/setVideoMuted', muted)
  if (autoplay) commit('Controls/setVideoAutoplay', autoplay)
  addVideoEventListeners(state.Controls.video)
}

export const addVideoEventListeners = (video) => {
  video.onplay = () => commit('Controls/setPlaying', true)
  video.addEventListener('emptied', pauseControlListener)
  video.addEventListener('pause', pauseControlListener)
  video.onenterpictureinpicture = () => commit('Controls/setPip', true)
  video.onleavepictureinpicture = () => commit('Controls/setPip', false)
}

export const removeVideoPauseListeners = () => {
  state.Controls.video.removeEventListener('emptied', pauseControlListener)
  state.Controls.video.removeEventListener('pause', pauseControlListener)
}

const pauseControlListener = () => {
  commit('Controls/setPlaying', false)
}
// SDK VIEW MODULE INITIALIZATION

export const initViewModule = async () => {
  //Expose Viewer version and SDK Logger into the console
  window.Version = process.env.PACKAGE_VERSION
  window.Logger = Logger
  const accountId = params.getAccountId()
  const streamName = params.getStreamName()
  await viewConnection.handleInitViewConnection(accountId, streamName)
  setViewerEvents()
}

export const connectToStream = async () => {
  viewConnection.handleConnectToStream()
}

export const stopStream = async () => {
  viewConnection.handleStopStream()
}

const setViewerEvents = () => {
  viewConnection.setTrackEvent()
  setBroadcastEvent()
}

// BROADCAST EVENTS

const setBroadcastEvent = () => {
  //todo: catch user count event and set it in Vuex
  const millicastView = state.ViewConnection.millicastView
  state.ViewConnection.eventListeners.broadcastEvent =
    state.ViewConnection.eventListeners.broadcastEvent ??
    millicastView.on('broadcastEvent', (event) => {
      const { name } = event
      switch (name) {
        case 'active':
          updateActiveBroadcastState(event)
          break
        case 'stopped':
          updateStoppedBroadcastState(event)
          break
        case 'inactive':
          updateInactiveBroadcastState(event)
          break
        case 'layers':
          updateLayersBroadcastState(event)
          break
        case 'viewercount':
          updateViewerCount(event)
          break
        default:
          break
      }
    })
}

const configureDrm = (event) => {
  const sourceId = event.data.sourceId

  if (state.Params.viewer.drm && !sourceId) {

    const tracksMapping = event.data.tracks.map(track => {
      const { media } = track
      const mediaId = media === 'video' ? '0' : '1'
      return {
        ...track,
        mediaId
      }
    })
    const mainVideoElement = state.Controls.video
    const mainAudioElement = state.Controls.drmAudio
    const drmOptions = {
      videoElement: mainVideoElement,
      audioElement: mainAudioElement,
      videoEncryptionParams: event.data.encryption,
      videoMid: '0',
    }
    const audioTrackMapping = tracksMapping.find(track => track.media === 'audio')
    if (audioTrackMapping) {
      drmOptions.audioMid = audioTrackMapping.mediaId
    }
    const millicastView = state.ViewConnection.millicastView
    millicastView.configureDRM(drmOptions)
  }
}

const updateActiveBroadcastState = (event) => {
  if (event.data.encryption) {
    configureDrm(event)
  }
  sources.getTracks(event.data)
  commit('Controls/setIsLive', true)
  if (!state.Controls.isSelectingLayer) {
    commit('Controls/setIsLoading', false)
  }
  viewConnection.setReconnect()
  if (!state.Controls.video.srcObject && !state.Params.viewer.drm) {
    commit('Controls/setVideoSource', state.Controls.srcObject)
  }
  if (selectingLayerTimeout != null) {
    const timeoutId = setTimeout(() => {
      console.warn('Starting quality selected, but no layer event available.');
      commit('Controls/setIsLoading', false)
    }, 5000)
    selectingLayerTimeout = timeoutId
  }
}

const updateStoppedBroadcastState = () => {
  commit('Controls/setIsLoading', false)
  commit('Controls/setIsLive', false)
}

const updateInactiveBroadcastState = (event) => {
  const { data } = event
  const selectedVideoSource = state.Sources.selectedVideoSource
  const selectedAudioSource = state.Sources.selectedAudioSource
  const trackWarning =
    (selectedVideoSource.sourceId === null ||
      selectedAudioSource.sourceId === null) &&
    data.sourceId === null
  sources.handleDeleteSource(data?.sourceId ?? null)

  if (!event.data.streamId) {
    commit('Controls/setUserCount', null)
  }
  if (
    state.Sources.videoSources.length + state.Sources.audioSources.length ===
    0
  ) {
    layers.deleteLayers()
    commit('Controls/setTrackWarning', false)
    commit('Controls/setIsLive', false)
    commit('Controls/setPlaying', false)
    commit('Controls/setVideoSource', null)
  } else if (trackWarning) {
    if (state.Controls.dropup === '') {
      commit('Controls/setDropup', 'settings')
    }
    commit('Controls/setTrackWarning', trackWarning)
  }
}

const updateLayersBroadcastState = (event) => {
  if ('0' in event.data.medias) {
    layers.updateLayers(event)
  } else {
    layers.deleteLayers()
  }
  const medias = state.Layers.mainTransceiverMedias.active
  if (medias.length === 0) {
    console.warn('No active layers available, will wait for next event. Switching to Auto until then.')
    if (selectingLayerTimeout != null) {
      clearTimeout(selectingLayerTimeout)
    }
    selectingLayerTimeout = null
    commit('Controls/setIsLoading', false)
    return
  }
  if (state.Controls.isSelectingLayer && state.Params.viewer.startingQuality !== null) {
    let selectedMedia = {}
    const startingQuality = state.Params.viewer.startingQuality
    const qualityIndex = ['auto', 'high', 'medium', 'low'].indexOf(startingQuality.toLowerCase())
    if (/^\d{3,4}$/.test(startingQuality)) {
      // Select layer with specific height
      selectedMedia = medias.find((media) => media.height === parseInt(startingQuality))
      console.log('Selected media, height:', selectedMedia?.id)
    } else if (qualityIndex >= 0) {
      if (startingQuality.toLowerCase() === 'low') {
        selectedMedia = medias[medias.length - 1]
      } else {
        selectedMedia = medias[qualityIndex]
      }
      console.log('Selected media, level:', selectedMedia?.id)
    } else {
      console.warn('Not valid starting quality, switching to Auto')
      selectedMedia = { name: 'Auto' }
    }
    if (selectedMedia == undefined) {
      console.warn('Not valid starting quality, switching to Auto')
      selectedMedia = { name: 'Auto' }
    }
    setTimeout(() => {
      selectQuality(selectedMedia)
      if (selectingLayerTimeout != null) {
        clearTimeout(selectingLayerTimeout)
      }
      selectingLayerTimeout = null
      commit('Controls/setIsSelectingLayer', false)
      commit('Controls/setIsLoading', false)
    }, 1500)
  }
}

const updateViewerCount = (event) => {
  commit('Controls/setViewerCount', event.data.viewercount)
}

// LAYERS

export const selectQuality = (media) => {
  layers.handleSelectQuality(media)
}

// SOURCES

export const selectSource = async ({ kind, source }) => {
  return await sources.handleSelectSource({ kind, source })
}

export const projectRemoteTracks = async (remoteTrack) => {
  sources.handleProjectRemoteTracks(remoteTrack)
}

export const projectVideo = async (what, where, trackId, layer) => {
  sources.handleProjectVideo(what, where, trackId, layer)
}

export const unprojectMultiview = async () => {
  sources.handleUnprojectMultiview()
}

// CAST

export const setCast = async () => {
  cast.handleSetCast()
}
