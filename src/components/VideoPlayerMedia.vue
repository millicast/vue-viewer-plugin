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
      :poster="viewer.placeholderImg"
      :class="{ 'display: none;': currentElementRef === 'player2' }"
      :style="isSplittedView ? 'border-radius: 0.25rem' : 'border-radius: 0'"
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
      :poster="viewer.placeholderImg"
      :class="{ 'display: none;': currentElementRef === 'player' }"
      :style="isSplittedView ? 'border-radius: 0.25rem' : 'border-radius: 0'"
    ></video>
  </template>
  <span
    v-if="videoSources.length > 1 && isSplittedView && !fullscreen && viewer.showLabels"
  >
    {{this.mainLabel}}
  </span>
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
      muted: this.viewer.muted,
      autoplay: this.viewer.autoplay,
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
      mainLabel: (state) => state.mainLabel,
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
      isSplittedView: (state) => state.isSplittedView,
      previousSplitState: state => state.previousSplitState,
      isGrid: state => state.isGrid,
      fullscreen: (state) => state.fullscreen,
    }),
    ...mapState('Params', {
      viewer: (state) => state.viewer,
    }),
    ...mapGetters('Sources', ['getVideoHasMain', 'getAudioHasMain']),
    displayAudioOnly() {
      return (
        (this.isAudioOnly && this.isLive) ||
        (this.viewer.placeholderImg === null && !this.isLive)
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
      'setIsSplittedView',
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
        this.setIsSplittedView(false)
        toast.warning(`Connection lost. Retrying...`)
      } else {
        const setSplitView = (state) => {
          if (['connected'].includes(state)) {
            this.setIsSplittedView(this.previousSplitState)
            this.millicastView.removeListener('connectionStateChange', setSplitView)
          }
        }
        this.millicastView.on('connectionStateChange', setSplitView)
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
    async viewer() {
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
  max-height: 100vh;
  pointer-events: none;
  border-radius: 0.25rem;
}

#main-source span {
  bottom: 1rem;
  left: 1rem;
  position: absolute;
  color: #fff;
  background: rgba(0, 0, 0, 0.288);
  padding: 4px 8px;
  font-size: 0.875rem;
  line-height: 1.15rem;
  border-radius: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  max-width: 6rem;
  overflow: hidden;
}

.test-player video, .test-player-2 video {
  border-radius: .25rem;
}
.grid-player {
  width: 100%;
  align-self: center;
  position: relative;
}
</style>
