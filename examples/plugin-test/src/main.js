import { createApp } from 'vue'
import App from './App.vue'
// import the plugin
import VideoPlayer from '@millicast/vue-viewer-plugin'
import '@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css'

const Vue = createApp(App)

// install to the app
Vue.use(VideoPlayer, {})
Vue.mount('#app')
