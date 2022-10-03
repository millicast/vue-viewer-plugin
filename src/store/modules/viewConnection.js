const defaultState = {
  millicastView: null,
  eventListeners: {
    reconnect: null,
    stats: null,
    broadcastEvent: null,
  },
  trackEvent: {
    audio: {
      track: null,
      transceiver: null,
    },
    video: {
      track: null,
      transceiver: null,
    },
  },
}

export default {
  namespaced: true,
  state: defaultState,
  mutations: {
    setMillicastView(state, millicastView) {
      state.millicastView = millicastView
    },
  },
}
