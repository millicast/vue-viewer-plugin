import { defaultOptions } from '../../service/userParams'
import { setCast } from '../../service/sdkManager'

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
    async chromecastId(state) {
      setCast()
      return state.queryParams.chromecastId
    },
  }
}
