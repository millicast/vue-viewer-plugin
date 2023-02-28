import { defaultOptions } from '../../service/userParams'

const defaulState = {
  queryParams: defaultOptions,
}

export default {
  namespaced: true,
  state: defaulState,
  mutations: {
    setQueryParams(state, queryParams) {
      state.queryParams = queryParams
    },
  },
  getters: {
    queryParams(state) {
      return state.queryParams
    },
  }
}
