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
    process.env.VUE_APP_DIRECTOR_ENDPOINT ||
    state.Params.queryParams.directorUrl
  ) {
    Director.setEndpoint(
      state.Params.queryParams.directorUrl ??
        process.env.VUE_APP_DIRECTOR_ENDPOINT
    )
  }
}

const setLiveDomain = () => {
  if (process.env.VUE_APP_LIVEWS_ENDPOINT) {
    Director.setLiveDomain(process.env.VUE_APP_LIVEWS_ENDPOINT)
  }
}

const setPeerConnection = () => {
  if (process.env.VUE_APP_TURN_ENDPOINT) {
    PeerConnection.setTurnServerLocation(process.env.VUE_APP_TURN_ENDPOINT)
  }
}

export const handleInitViewConnection = (accountId, streamName) => {
  if (!streamName || !accountId) {
    throw new Error('Stream ID not provided.')
  }
  setEnvironment()
  const tokenGenerator = () =>
    Director.getSubscriber(
      streamName,
      accountId,
      state.Params.queryParams.token
    )
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
    await millicastView.connect({
      events: ['active', 'inactive', 'layers', 'viewercount'],
      absCaptureTime: true,
    })
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
}

const setStream = async (entrySrcObject) => {
  const video = state.Controls.video
  addSignalingMigrateListener()
  verifyStreamWithPeer()
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
    commit('Controls/setSrcObject', entrySrcObject)
    mediaTag.srcObject = entrySrcObject
    mediaTag.autoplay = state.Controls.playing
    mediaTag.muted = state.Controls.muted
    removeVideoPauseListeners()

    addVideoEventListeners(mediaTag)
    mediaTag.onloadedmetadata = async () => {
      commit('Controls/setVideo', mediaTag)
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
    setVideoPlayer({ videoPlayer: video, srcObject: entrySrcObject })
  }
}

const setCanAutoPlayStream = async () => {
  commit('Controls/setVideoAutoplay', state.Params.queryParams.autoplay)
  if (state.Params.queryParams.autoplay) {
    const canAutoPlayVideo = await canAutoPlay.video({
      muted: state.Params.queryParams.muted,
    })
    const muted = !state.Params.queryParams.muted
      ? !canAutoPlayVideo.result
      : state.Params.queryParams.muted
    commit('Controls/setVideoMuted', muted)
    commit('Controls/setAutoPlayMuted', muted)
  }
}

const verifyStreamWithPeer = () => { 
  const millicastView = state.ViewConnection.millicastView
  const peerVideoReceiver = millicastView.webRTCPeer.peer.getReceivers().find((r)=> r.track.kind === "video")
  const video = state.Controls.video
  if (peerVideoReceiver?.track.id !== video.srcObject?.getVideoTracks()[0].id) {
    commit('Controls/setVideoSource', null)
    commit('Controls/setSrcObject', null)
    commit('Controls/setIsSplittedView', false)
  }
}

export const setReconnect = () => {
  state.ViewConnection.eventListeners.reconnect =
    state.ViewConnection.eventListeners.reconnect ??
    state.ViewConnection.millicastView.on('reconnect', ({ timeout, error }) => {
      const errorMessage = error.response?.data?.data?.message?.toLowerCase()
      if (errorMessage?.toLowerCase().includes('stream not being published')) {
        commit('Controls/setIsLoading', false)
        commit('Controls/setIsLive', false)
      } else {
        commit('Controls/setVideoSource', null)
        commit('Controls/setSrcObject', null)
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
