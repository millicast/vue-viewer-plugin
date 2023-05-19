import { Logger } from '@millicast/sdk'

import * as params from './utils/params'
import * as viewConnection from './utils/viewConnection'
import * as sources from './utils/sources'
import * as layers from './utils/layers'
import * as cast from './utils/cast'

//Import Vuex Store.
import store from '../store'
const { commit, state } = store

// VIDEO PLAYER

// Similar logic to playerChange event
export const setVideoPlayer = ({
  videoPlayer,
  srcObject,
  volume,
  muted,
  autoplay,
}) => {
  if (videoPlayer) {
    commit('Controls/setVideo', videoPlayer)
    commit('Controls/setCurrentElementRef', videoPlayer.id)
  }
  if (srcObject) {
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

export const initViewModule = () => {
  //Expose Viewer version and SDK Logger into the console
  window.Version = process.env.PACKAGE_VERSION
  window.Logger = Logger
  const accountId = params.getAccountId()
  const streamName = params.getStreamName()
  viewConnection.handleInitViewConnection(accountId, streamName)
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

const updateActiveBroadcastState = (event) => {
  sources.getTracks(event.data)
  commit('Controls/setIsLoading', false)
  commit('Controls/setIsLive', true)
  viewConnection.setReconnect()
  if (!state.Controls.video.srcObject) {
    commit('Controls/setVideoSource', state.Controls.srcObject)
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
  if ('0' in event.data.medias) 
    layers.updateLayers(event)
  else
    layers.deleteLayers()
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
  sources.handleSelectSource({ kind, source })
}

export const projectRemoteTracks = async (index) => {
  sources.handleProjectRemoteTracks(index)
}

export const projectVideo = async (what, where, index) => {
  sources.handleProjectVideo(what, where, index)
}

// CAST

export const setCast = async () => {
  cast.handleSetCast()
}
