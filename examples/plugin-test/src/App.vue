<template>
  <vue-resizable class="resizable">
    <VideoPlayer :paramsOptions="viewerPluginParams" />
  </vue-resizable>
</template>

<script>
import VueResizable from 'vue-resizable'
export default {
  name: 'App',
  components: {
    VueResizable,
  },
  data() {
    return {
      viewerPluginParams: {
        accountId: process.env.VUE_APP_DOLBY_RTS_ACCOUNT_ID,
        streamName: process.env.VUE_APP_DOLBY_RTS_STREAM_NAME,
        autoplay: false,
        hideButtons: [],
      },
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
