import { createApp } from 'vue'
import App from './App.vue'
import VideoPlayer from '@millicast/vue-viewer-plugin'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const Vue = createApp(App, {})

Vue.use(VideoPlayer, {})
Vue.use(BootstrapVue3)

Vue.mount('#app')

// disable specific warnings
Vue.config.warnHandler = (msg, trace) =>
    ![
        'Failed to resolve component: google-cast-launcher',
    ].some((warning) => msg.includes(warning)) && console.warn('[Vue warn]: '.concat(msg).concat(trace))