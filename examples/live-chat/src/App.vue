<template>
  <div id="container" class="row">
    <div class="col d-flex align-items-center">
      <template v-if="streamId.accountId && streamId.streamName">
        <VideoPlayer :paramsOptions="streamId" class="video-container" />
      </template>
      <template v-else>
        <div  class="alert alert-danger fade show" role="alert">
          You have not settled your Millicast credentials in the .ENV file.
        </div>
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

<style lang="scss" scoped>
#container {
  margin: 0;
}

.video-container {
  width: 100%;
  margin: 1rem 0;
}
</style>

<style>
@import '@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css';
</style>
