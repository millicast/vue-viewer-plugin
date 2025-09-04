<template>
  <b-modal
    size="lg"
    v-model="modalShow"
    v-if="!pubnubSettled || !millicastSettled"
    ref="my-modal"
    title="Warning"
    ok-only
  >
    <ul>
      <li v-if="!pubnubSettled">
        You have not settled your PubNub credentials in the .ENV file.
      </li>
      <li v-if="!millicastSettled">
        You have not settled your Millicast credentials in the .ENV file.
      </li>
    </ul>
  </b-modal>

  <div id="container" class="row">
    <div id="video-player" class="col d-flex align-items-center py-3">
      <template v-if="millicastSettled">
        <VideoPlayer
          :paramsOptions="{
            accountId: accountId,
            streamName: streamName,
          }"
        />
      </template>
      <template v-else>
        <div class="alert alert-danger fade show" role="alert">
          You have not settled your Millicast credentials in the .ENV file.
        </div>
      </template>
    </div>
    <LiveChat />
  </div>
</template>

<script>
import LiveChat from './components/LiveChat.vue'
const PubNubCredentials =
  process.env.VUE_APP_PUBNUB_PUBLISH_KEY &&
  process.env.VUE_APP_PUBNUB_SUBSCRIBE_KEY &&
  process.env.VUE_APP_PUBNUB_UUID
const MillicastCredentials =
  process.env.VUE_APP_MILLICAST_ACCOUNT_ID &&
  process.env.VUE_APP_MILLICAST_STREAM_NAME
export default {
  name: 'App',
  components: {
    LiveChat,
  },
  data() {
    return {
      accountId: process.env.VUE_APP_MILLICAST_ACCOUNT_ID,
      streamName: process.env.VUE_APP_MILLICAST_STREAM_NAME,
      pubnubSettled: PubNubCredentials,
      millicastSettled: MillicastCredentials,
      modalShow: true,
    }
  },
}
</script>

<style lang="scss" scoped>
#container {
  margin: 0;
}

@media only screen and (max-width: 990px) {
  #video-player {
    height: 50vh;
  }
}
</style>

<style>
@import '@millicast/vue-viewer-plugin/dist/millicast-vue-viewer-plugin.css';
</style>
