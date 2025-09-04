import { defaultViewerOptions } from '../../service/viewerOptions'
import { defaultEnvOptions } from '../../service/environmentOptions'

const defaulState = {
  viewer: defaultViewerOptions,
  environment: defaultEnvOptions,
}

export default {
  namespaced: true,
  state: defaulState,
  mutations: {
    setViewerOptions(state, viewer) {
      state.viewer = viewer
    },
    setEnvironmentOptions(state, environment) {
      state.environment = environment
    },
  },
}
