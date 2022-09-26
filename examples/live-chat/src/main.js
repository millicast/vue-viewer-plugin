import { createApp } from 'vue'
import App from './App.vue'
import VideoPlayer from "@millicast/vue-viewer-plugin"

const params = new URLSearchParams(window.location.search);

const streamId = params.get('streamId');

const Vue = createApp(App, {
    streamId: streamId,
});

Vue.use(VideoPlayer, {

})

Vue.mount('#app');