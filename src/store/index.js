import { createStore } from 'vuex'

import Sources from './modules/sources'
import Layers from './modules/layers'
import Controls from './modules/controls'
import ViewConnection from './modules/viewConnection'
import Params from './modules/params'

export default createStore({
    state: {
        sources: [],
    },
    mutations: {},
    actions: {},
    modules: {
        Sources,
        Layers,
        Controls,
        ViewConnection,
        Params,
    },
})
