<template>
  <template v-if="isMigrating || currentElementRef === 'player'">
    <audio
      v-if="displayAudioOnly"
      playsinline
      id="player"
      ref="player"
      :class="{ 'display: none;': currentElementRef === 'player2' }"
    ></audio>
    <video
      v-else
      playsinline
      id="player"
      ref="player"
      :poster="queryParams.placeholderImg"
      :class="{ 'display: none;': currentElementRef === 'player2' }"
    ></video>
  </template>
  <template v-if="isMigrating || currentElementRef === 'player2'">
    <audio
      v-if="displayAudioOnly"
      playsinline
      id="player2"
      ref="player2"
      :class="{ 'display: none;': currentElementRef === 'player' }"
    ></audio>
    <video
      v-else
      playsinline
      id="player2"
      ref="player2"
      :poster="queryParams.placeholderImg"
      :class="{ 'display: none;': currentElementRef === 'player' }"
    ></video>
  </template>
</template>

<script>
import { nextTick } from 'vue'
import {
  initViewModule,
  connectToStream,
  stopStream,
  setVideoPlayer,
} from '../service/sdkManager'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
  name: 'VideoPlayerMedia',
  data() {
    return {
      accountId: null,
      streamName: null,
      eventListeners: {
        reconnect: null,
        stats: null,
        broadcastEvent: null,
      },
    }
  },
  async mounted() {
    const player = document.getElementById(this.currentElementRef)
    setVideoPlayer({
      videoPlayer: player,
      srcObject: null,
      volume: 1,
      muted: this.queryParams.muted,
      autoplay: this.queryParams.autoplay,
    })
  },
  computed: {
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),

    ...mapState('Layers', {
      selectedQuality: (state) => state.selectedQuality,
    }),
    ...mapState('Sources', {
      isAudioOnly: (state) => state.isAudioOnly,
      stream: (state) => state.stream,
      selectedVideoSource: (state) => state.selectedVideoSource,
      selectedAudioSource: (state) => state.selectedAudioSource,
      audioSources: (state) => state.audioSources,
      videoSources: (state) => state.videoSources,
    }),
    ...mapState('Controls', {
      video: (state) => state.video,
      dropup: (state) => state.dropup,
      playerMuted: (state) => state.muted,
      isLive: (state) => state.isLive,
      reconnection: (state) => state.reconnection,
      reconnectionStatus: (state) => state.reconnection.status,
      currentElementRef: (state) => state.currentElementRef,
      isMigrating: (state) => state.isMigrating,
    }),
    ...mapState('Params', {
      queryParams: (state) => state.queryParams,
    }),
    ...mapGetters('Sources', ['getVideoHasMain', 'getAudioHasMain']),
    displayAudioOnly() {
      return (
        (this.isAudioOnly && this.isLive) ||
        (this.queryParams.placeholderImg === null && !this.isLive)
      )
    },
  },
  methods: {
    ...mapMutations('Sources', [
      'addVideoSource',
      'addAudioSource',
      'setStream',
    ]),
    ...mapMutations('Layers', ['addLayers', 'selectQuality', 'deleteLayers']),
    ...mapMutations('Controls', [
      'setVideoMuted',
      'setDropup',
      'setTrackWarning',
      'stopVideo',
      'setAutoPlayMuted',
      'userParamOptions',
    ]),
    ...mapMutations('ViewConnection', ['setMillicastView']),
    ...mapActions('Sources', ['updateBroadcastState']),
    stop() {
      this.millicastView?.stop()
      this.stopCurrentVideo()
    },
    stopCurrentVideo() {
      this.eventListeners.stats = null
      this.stopVideo()
    },
  },
  watch: {
    reconnectionStatus: function (isReconnecting) {
      const toast = useToast()
      toast.clear()
      if (isReconnecting) {
        toast.warning(`Connection lost. Retrying...`)
      }
    },
    displayAudioOnly: async function () {
      //If the flag changes we have to set the same events and src to the new tag
      //Get current params from previous video/audio tag
      const srcObject = this.video.srcObject
      const volume = this.video.volume
      const muted = this.video.muted
      const autoplay = this.video.autoplay
      //Render new tag
      await nextTick()
      //Set new tag params
      const player = document.getElementById(this.currentElementRef)
      setVideoPlayer({
        videoPlayer: player,
        srcObject,
        volume,
        muted,
        autoplay,
      })
    },
    async queryParams() {
      await stopStream()
      await nextTick()

      const toast = await useToast()
      initViewModule()
      try {
        await connectToStream()
        setTimeout(() => {
          this.setAutoPlayMuted(false)
        }, 6000)
      } catch (e) {
        toast.error(e.message)
      }
    },
  },
}
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
