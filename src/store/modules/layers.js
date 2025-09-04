const defaulState = {
  medias: {
    active: [],
    inactive: [],
    layers: [],
  },
  selectedQuality: { name: 'Auto' },
  mainTransceiverMedias: {
    active: [],
    inactive: [],
    layers: [],
  },
}

export default {
  namespaced: true,
  state: defaulState,
  mutations: {
    setMainTransceiverMedias(state, medias) {
      state.mainTransceiverMedias = medias
    },
    setMedias(state, medias) {
      state.medias = medias
    },
    setSelectedQuality(state, quality) {
      state.selectedQuality = quality
    },
    selectQuality(state, quality) {
      state.selectedQuality = quality
    },
  },
  getters: {
    getActiveMedias(state) {
      return state.medias
    },
    getActiveMainTransceiverMedias(state) {
      return state.mainTransceiverMedias.active
    },
  },
}
