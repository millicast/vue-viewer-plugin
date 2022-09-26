const defaulState = {
    medias: {
      active: [],
      inactive: []
    },
    selectedQuality: {name: 'Auto'}
  }

export default {
    namespaced: true,
    state: defaulState,
    mutations: {
      setMedias(state, medias) {
        state.medias = medias
      },
      setSelectedQuality(state, quality) {
        state.selectedQuality = quality
      },
      selectQuality(state, quality){
        state.selectedQuality = quality
      }
    },
    getters: {
      getActiveMedias(state){
        return state.medias.active
      }
    }
  }
  