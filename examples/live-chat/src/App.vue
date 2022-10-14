<template>
  <div id="container" class="row">
    <div class="col d-flex align-items-center justify-content-center">
      <template v-if="streamId.accountId && streamId.streamName">
        <VideoPlayer :paramsOptions="streamId" class="video-container" />
      </template>
      <template v-else>
        You have not settled your Millicast credentials in the .ENV file.
      </template>
    </div>
    <LiveChat />
  </div>
</template>

<script>
import LiveChat from './components/LiveChat.vue'
export default {
  name: 'App',
  components: {
    LiveChat,
  },
  data() {
    return {
      streamId: {
        accountId: process.env.VUE_APP_MILLICAST_ACCOUNT_ID,
        streamName: process.env.VUE_APP_MILLICAST_STREAM_NAME,
      },
    }
  },
}
</script>

<style>
#container {
  margin: 0;
}

.video-container {
  /* line-height: 0; */
  width: 100%;
  margin: 1rem 0;
}
</style>

<style>
@import '@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css';
</style>
