import store from '../../store'
import { connectToStream, stopStream } from '../sdkManager'
const { commit, state } = store
const receiverApplicationId = process.env.VUE_APP_CHROMECAST_ID
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
            castContext = await window.cast.framework.CastContext.getInstance()
            if (window.chrome.cast && window.chrome.cast.AutoJoinPolicy) {
                castContext.setOptions({
                    autoJoinPolicy:
                        window.chrome.cast.AutoJoinPolicy.PAGE_SCOPED,
                    receiverApplicationId,
                })
            } else {
                commit('Controls/setCastAvailable', false)
            }
        }

        const { CAST_STATE_CHANGED, SESSION_STATE_CHANGED } =
            window.cast.framework.CastContextEventType
        await castContext.addEventListener(
            CAST_STATE_CHANGED,
            async ({ castState }) => await castStateListener(castState)
        )
        await castContext.addEventListener(SESSION_STATE_CHANGED, (e) =>
            sessionListener(e)
        )
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
