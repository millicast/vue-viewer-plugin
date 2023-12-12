const defaultState = {
  type: '',
  message: '',
  showError: false,
}

export default {
  namespaced: true,
  state: defaultState,
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    setType(state, type) {
      state.type = type
    },
    setShowError(state, show) {
      state.showError = show
    },
  },
}
