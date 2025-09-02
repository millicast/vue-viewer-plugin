import { Director, View, PeerConnection } from '@millicast/sdk'
import {
  setVideoPlayer,
  addVideoEventListeners,
  removeVideoPauseListeners,
} from '../sdkManager'
import store from '../../store'
import { nextTick } from 'vue'
const { commit, state } = store

import canAutoPlay from 'can-autoplay'

const setEnvironment = () => {
  setDirectorEndpoint()
  setLiveDomain()
  setPeerConnection()
}

const setDirectorEndpoint = () => {
  if (
    state.Params.environment.VUE_APP_DIRECTOR_ENDPOINT ||
    state.Params.viewer.directorUrl
  ) {
    Director.setEndpoint(
      state.Params.viewer.directorUrl ??
        state.Params.environment.VUE_APP_DIRECTOR_ENDPOINT
    )
  }
}

const setLiveDomain = () => {
  if (state.Params.environment.VUE_APP_LIVEWS_ENDPOINT) {
    Director.setLiveDomain(state.Params.environment.VUE_APP_LIVEWS_ENDPOINT)
  }
}

const setPeerConnection = () => {
  if (state.Params.environment.VUE_APP_TURN_ENDPOINT) {
    PeerConnection.setTurnServerLocation(state.Params.environment.VUE_APP_TURN_ENDPOINT)
  }
}

export const handleInitViewConnection = (accountId, streamName) => {
  if (!streamName || !accountId) {
    throw new Error('Stream ID not provided.')
  }
  setEnvironment()
  const tokenGenerator = () => {
    const subscriber = Director.getSubscriber(
      streamName,
      accountId,
      state.Params.viewer.token,
      state.Params.viewer.drm
    )
    subscriber.catch((error) => {
      const errorMessage = `${error}`
      if(!errorMessage.includes('stream not being published')) {
        const splitedMessage = errorMessage.replace('FetchError: ','')
        commit('Errors/setMessage', splitedMessage)
        commit('Errors/setType', 'SubscriberError')
        commit('Errors/setShowError', true)
      }
    })
    return subscriber
  }

  const millicastView = new View(streamName, tokenGenerator)
  window.millicastView = millicastView
  window.__defineGetter__('peer', () => {
    return millicastView.getRTCPeerConnection()
  })
  commit('ViewConnection/setMillicastView', millicastView)
}

export const handleConnectToStream = async () => {
  const millicastView = state.ViewConnection.millicastView
  if (millicastView.isActive()) {
    return
  }
  try {
    await setCanAutoPlayStream()
    const connectOptions = {
      enableDRM: state.Params.viewer.drm,
      events: ['active', 'inactive', 'layers', 'viewercount'],
      absCaptureTime: true,
    }
    if (state.Params.viewer.audioOnly) {connectOptions.disableVideo = true}
    if (state.Params.viewer.videoOnly) {connectOptions.disableAudio = true}
    if (state.Params.viewer.forcePlayoutDelay) {connectOptions.forcePlayoutDelay = state.Params.viewer.forcePlayoutDelay}
    if (state.Params.viewer.metadata) {connectOptions.metadata = state.Params.viewer.metadata}
    if (state.Params.viewer.abrStrategy) {
      connectOptions.abrConfiguration = {
        strategy: state.Params.viewer.abrStrategy
      }
      if(state.Params.viewer.abrBandwidth) {
        connectOptions.abrConfiguration.metadata = {
          bitrate: state.Params.viewer.abrBandwidth
        }
      }
    }

    await millicastView.connect(connectOptions)
    addSignalingMigrateListener()
  } catch (e) {
    const message = e.response?.data?.data?.message
    commit('Controls/setIsLoading', false)
    commit('Controls/setIsLive', false)
    millicastView.reconnect()
    if (!message) return
    if (!message.toLowerCase().includes('stream not being published')) {
      throw new Error(`${message.charAt(0).toUpperCase()}${message.slice(1)}`)
    }
  }
}

export const setTrackEvent = () => {
  const millicastView = state.ViewConnection.millicastView
  millicastView.on('track', async (event) => {
    // Track event is handled by SDK for DRM
    if (state.Params.viewer.drm) return
    // map video trackId with mid
    if (event.track?.kind === 'video') {
      commit('Sources/addTrackIdMidMapping', {
        trackId: event.track?.id,
        mid: event.transceiver?.mid
      })
    }
    if (event.streams.length) {
      await setStream(event.streams[0])
    }
    if (!state.ViewConnection.trackEvent[event.track.kind].transceiver[0]) {
      state.ViewConnection.trackEvent[event.track.kind].transceiver[0] =
        event.transceiver
    } else {
      state.ViewConnection.trackEvent[event.track.kind].transceiver.push(
        event.transceiver
      )
    }
    state.ViewConnection.trackEvent[event.track.kind].track = true
  })

  if (state.Params.viewer.metadata) {
    millicastView.on('metadata', (metadata) => {
      const metadataEvent = new CustomEvent("metadata", { detail: { metadata } })
      window.dispatchEvent(metadataEvent)
    })
  }
}

const setStream = async (entrySrcObject) => {
  const video = state.Controls.video
  const drmAudio = state.Controls.drmAudio
  addSignalingMigrateListener()
  commit('Controls/setSrcObject', entrySrcObject)
  //If we already had a a stream and is not migrating then we ignore it (Firefox addRemoteTrack issue)
  if (
    video.srcObject &&
    video.srcObject.id !== entrySrcObject.id &&
    !state.Controls.viewerMigratingEvent
  ) {
    return
  }
  //If we already had a a stream
  if (
    video.srcObject &&
    video.srcObject.id !== entrySrcObject.id &&
    state.Controls.viewerMigratingEvent
  ) {
    commit('Controls/setPreviousSplitState', state.Controls.isSplittedView)
    commit('Controls/setIsMigrating', true)
    commit('Controls/setIsSplittedView', false)
    await nextTick()
    const opositeElementRef =
      state.Controls.currentElementRef === 'player' ? 'player2' : 'player'
    const mediaTag = document.getElementById(opositeElementRef)
    const drmAudio = document.getElementById('drm-audio-' + opositeElementRef)
    mediaTag.srcObject = entrySrcObject
    mediaTag.autoplay = state.Controls.playing
    mediaTag.muted = state.Controls.muted
    removeVideoPauseListeners()

    addVideoEventListeners(mediaTag)
    mediaTag.onloadedmetadata = async () => {
      commit('Controls/setVideo', mediaTag)
      commit('Controls/setDrmAudio', drmAudio)
      commit('Controls/setCurrentElementRef', opositeElementRef)
      commit('Controls/setIsMigrating', false)
      commit('Controls/setIsSplittedView', state.Controls.previousSplitState)
      if (document.pictureInPictureElement) {
        mediaTag.requestPictureInPicture()
      }
    }
    commit('Controls/setViewerMigratingEvent', false)
    commit('Controls/setMigrateListenerIsSet', false)
    //We have to set the listener again since the signaling attribute of millicastView is changed after the migrate.
    addSignalingMigrateListener()
  } else {
    setVideoPlayer({ videoPlayer: video, srcObject: entrySrcObject, drmAudio: drmAudio })
  }
}

const setCanAutoPlayStream = async () => {
  commit('Controls/setVideoAutoplay', state.Params.viewer.autoplay)
  if (state.Params.viewer.autoplay) {
    const canAutoPlayVideo = await canAutoPlay.video({
      muted: state.Params.viewer.muted,
    })
    const muted = !state.Params.viewer.muted
      ? !canAutoPlayVideo.result
      : state.Params.viewer.muted
    commit('Controls/setVideoMuted', muted)
    commit('Controls/setAutoPlayMuted', muted)
  }
}

export const setReconnect = () => {
  state.ViewConnection.eventListeners.reconnect =
    state.ViewConnection.eventListeners.reconnect ??
    state.ViewConnection.millicastView.on('reconnect', ({ timeout, error }) => {
      const errorMessage = error?.toString().toLowerCase()
      if (errorMessage?.toLowerCase().includes('stream not being published')) {
        commit('Controls/setIsLoading', false)
        commit('Controls/setIsLive', false)
      } else {
        commit('Controls/setPreviousSplitState', state.Controls.isSplittedView)
        commit('Controls/setVideoSource', null)
        commit('Controls/setSrcObject', null)
        commit('Controls/setIsSplittedView', false)
        commit('Controls/setViewerMigratingEvent', false)
        commit('Controls/setMigrateListenerIsSet', false)
        commit('Controls/handleReconnection', { timeout, error })
      }
    })
}

export const handleStopStream = () => {
  state.ViewConnection.millicastView?.stop()
  commit('Controls/setVideoSource', null)
  commit('Controls/setSrcObject', null)
}

const addSignalingMigrateListener = () => {
  if (
    !state.Controls.viewerMigratingEvent &&
    !state.Controls.migrateListenerIsSet &&
    state.ViewConnection.millicastView.signaling
  ) {
    setTimeout(() => {
      state.ViewConnection.millicastView.signaling.on('migrate', () => {
        commit('Controls/setViewerMigratingEvent', true)
      })
      // Avoid setting the event listener more than once
      commit('Controls/setMigrateListenerIsSet', true)
    }, 50) //We have to set a timeout because it takes a while before the millicastView signaling instance changes on migrate.
  }
}
