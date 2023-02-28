import store from '../../store'
import { connectToStream, stopStream } from '../sdkManager'
const { commit, state } = store
const receiverApplicationId = state.Params.queryParams.chromecastId

console.log(receiverApplicationId)
console.log(store, 'store')
console.log(state, 'state')
console.log(JSON.parse(JSON.stringify(state)), 'jsoneado state')

console.log(state.Params.queryParams, 'state.Params.queryParams')
console.log(store.Params?.queryParams, 'store.Params.queryParams')
console.log(store.getters.Params, 'store.getters.Params')
console.log(store.getters?.Params?.queryParams, 'store.getters.Params.queryParams')
console.log(store.getters, 'store.getters')
console.log(store.getters['Params/queryParams'], "store.getters.['Params/queryParams']")

console.log(state.Params.queryParams, 'state.Params.queryParams')
console.log(store.Params?.queryParams, 'store.Params.queryParams')

let castContext = null
let castSession = null

export const handleSetCast = async () => {
  const castStateListener = async (castState) => {
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

  window['__onGCastApiAvailable'] = async (isAvailable) => {
    if (isAvailable) {
      setTimeout(async () => {
        //isAvaiable is returning true but window.cast is null if we don't use a timer for some reason
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
  })
}
