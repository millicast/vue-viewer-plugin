import store from '../../store/index.js'
import { connectToStream, stopStream } from '../sdkManager'
const { commit, state } = store
let castContext = null
let castSession = null

export const handleSetCast = async () => {
  const receiverApplicationId = 'CCB0A901' //state.Params.queryParams.chromecastId
  console.log(receiverApplicationId)

  const castStateListener = async (castState) => {
    console.log('castStateListener')
    const { cast } = window
    switch (castState) {
      case cast.framework.CastState.NO_DEVICES_AVAILABLE:
        commit('Controls/setCastAvailable', false)
        break
      case cast.framework.CastState.NOT_CONNECTED:
        commit('Controls/setCastAvailable', true)
        break
      case cast.framework.CastState.CONNECTED:
        await sendLoadRequest()
        break
      default:
        break
    }
  }

  const sessionListener = (event) => {
    console.log('sessionListener')
    const { cast } = window
    switch (event.sessionState) {
      case cast.framework.SessionState.SESSION_ENDED:
        castSession = null
        connectToStream()
        // Change to new connect
        commit('Controls/setCastIsConnected', false)
        break
      default:
        break
    }
  }

  console.log('antes de __onGCastApiAvailable')
  window['__onGCastApiAvailable'] = async (isAvailable) => {
    console.log('entre a __onGCastApiAvailable')
    if (isAvailable) {
      setTimeout(async () => {
        // isAvaiable is returning true but window.cast is null if we don't use a timer for some reason
        castContext = await window.cast.framework.CastContext.getInstance()
        if (window.chrome.cast && window.chrome.cast.AutoJoinPolicy) {
          castContext.setOptions({
            autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.PAGE_SCOPED,
            receiverApplicationId,
          })
          const { CAST_STATE_CHANGED, SESSION_STATE_CHANGED } =
            window.cast.framework.CastContextEventType
          await castContext.addEventListener(
            CAST_STATE_CHANGED,
            async ({ castState }) => await castStateListener(castState)
          )
          await castContext.addEventListener(SESSION_STATE_CHANGED, (e) =>
            sessionListener(e)
          )
        } else {
          commit('Controls/setCastAvailable', false)
        }
      }, 20)
    }
  }

}

export const sendLoadRequest = async () => {
  console.log('sendLoadRequest executed')
  const { chrome } = window
  const { streamId, token } = state.Controls.castOptions
  const multiSourceOptions = {
    audioSource: state.Sources.selectedAudioSource,
    videoSource: state.Sources.selectedVideoSource,
    audioMediaId:
      state.ViewConnection.trackEvent?.audio?.transceiver.mid ?? null,
    videoMediaId:
      state.ViewConnection.trackEvent?.video?.transceiver.mid ?? null,
  }

  castSession = await castContext.getCurrentSession()
  const mediaInfo = new chrome.cast.media.MediaInfo(streamId, '')
  mediaInfo.customData = { streamId, token, multiSourceOptions }
  mediaInfo.streamType = chrome.cast.media.StreamType.LIVE

  const loadRequest = new chrome.cast.media.LoadRequest(mediaInfo)
  castSession.loadMedia(loadRequest).then(() => {
    stopStream()
    commit('Controls/setCastDevice', castSession.getCastDevice())
    commit('Controls/setCastIsConnected', true)
  }).catch((error) => {
    console.log(error)
  })

  console.log(mediaInfo, castSession.getCastDevice())
}
