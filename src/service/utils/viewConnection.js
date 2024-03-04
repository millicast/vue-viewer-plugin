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
import { SimpleMetadataSync } from 'nal-extractor'

const setEnvironment = () => {
  setDirectorEndpoint()
  setLiveDomain()
  setPeerConnection()
}

const worker = new Worker('./worker.js')

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
        state.Params.viewer.token
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
      events: ['active', 'inactive', 'layers', 'viewercount'],
      absCaptureTime: true,
    }
    if (state.Params.viewer.audioOnly) {connectOptions.disableVideo = true}
    if (state.Params.viewer.videoOnly) {connectOptions.disableAudio = true}
    if (state.Params.viewer.forcePlayoutDelay) {connectOptions.forcePlayoutDelay = state.Params.viewer.forcePlayoutDelay}
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
    // map video trackId with mid
    if (event.track?.kind === 'video') {
      commit('Sources/addTrackIdMidMapping', {
        trackId: event.track?.id,
        mid: event.transceiver?.mid
      })
    }
    if (event.streams.length) {
      await setStream(event.streams[0], event.receiver)
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

const getSEITimecode = (video, receiver) => {
  const clockRate = 90000
  const cleanupTasks = []
  const metadataSync = new class extends SimpleMetadataSync {
    newFrame(now, frameMetadata) {
      super.newFrame(now, frameMetadata)
    }
    async waitMetadata() {
      if (this.metadata == undefined) {
        return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            clearInterval(interval)
            reject(new Error('timeout waiting for metadata'))
          }, 3000)  
          const interval = setInterval(() => {
            if (this.metadata !== undefined) {
              clearTimeout(timeout)
              clearInterval(interval)
              resolve(this.metadata)
            }
          }, 10)
        })
      }
      return this.metadata
    }
  } (clockRate, video, receiver, worker)

  if (receiver.track.kind === 'audio') {
    metadataSync.stop()
    metadataSync.metadata = undefined
    return
  }

  cleanupTasks.push(() => metadataSync.stop())

  const { timestamp } = metadataSync.metadata

  return () => [...cleanupTasks].reverse().forEach(x => x())
}

const setStream = async (entrySrcObject, receiver) => {
  const video = state.Controls.video
  addSignalingMigrateListener()
  commit('Controls/setSrcObject', entrySrcObject)
  if (video.srcObject && receiver.track.kind !== 'audio') {
    const tmp = video.cloneNode(true)
    // Override the muted attribute with current muted state
    tmp.muted = video.muted
    // Set same volume
    tmp.volume = video.volume
    // Set new stream
    tmp.srcObject = entrySrcObject
    // Replicate playback state
    if (video.playing) {
      try { tmp.play() } catch (e) { console.error('Could not play video') } 
    } else if (video.paused) {
      try { tmp.paused() } catch (e) { console.error('Could not pause video') } 
    }
    // Replace the video when media has started playing
    tmp.addEventListener('loadedmetadata', () => {
      getSEITimecode(tmp, receiver)
    })
  }
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
