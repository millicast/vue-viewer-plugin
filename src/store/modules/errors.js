const defaulState = {
  message: '',
  showError: false,
}

export default {
  namespaced: true,
  state: defaulState,
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    setShowError(state, show) {
      state.showError = show
    },
  },
}
