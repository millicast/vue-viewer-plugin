import { createApp } from 'vue'
import App from './App.vue'
import VideoPlayer from '@millicast/vue-viewer-plugin'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const Vue = createApp(App, {})

Vue.use(VideoPlayer, {})
Vue.use(BootstrapVue3)

Vue.mount('#app')
