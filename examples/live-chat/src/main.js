import { createApp } from 'vue'
import App from './App.vue'
import VideoPlayer from '@millicast/vue-viewer-plugin'

const Vue = createApp(App, {})

Vue.use(VideoPlayer, {})

Vue.mount('#app')
