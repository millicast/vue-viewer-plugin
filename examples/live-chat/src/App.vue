<template>
  <div id="container" class="row">
    <div class="col d-flex align-items-center justify-content-center">
      <VideoPlayer :paramsOptions="params" class="video-container"/>
    </div>
    <LiveChat 
      :streamId="$attrs['streamId']">
    </LiveChat>
  </div>
</template>

<script>
import LiveChat from "./components/LiveChat.vue";
export default {
  name: 'App',
  components: {
    LiveChat
  },
  data() {
    return {
      params: {
        accountId: this.$attrs['streamId'].split("/")[0],
        streamName: this.$attrs['streamId'].split("/")[1]
      }
    }
  }
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
  @import "@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css";
</style>