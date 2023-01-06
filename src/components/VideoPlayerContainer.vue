<template>
  <div
    style="height: 100%"
    :class="{
      'align-self-center': isSplittedView,
    }"
    @mousemove="showControls"
  >
    <div class="row mx-0" style="height: 100%">
      <div
        id="vplayer"
        ref="player"
        class="player"
        :class="{
          show: show,
          'mv-col-9 limit-screen': sourceRemoteTracks.length && isSplittedView,
        }"
        @dblclick="toggleFullscreen"
      >
        <div id="controls" class="controls" v-if="queryParams.controls && show">
          <div class="container-fluid pt-3 gradient-top controls-top">
            <div class="row">
              <div class="col-6 text-left">
                <VideoPlayerControlsUserCount v-if="showButton('userCount')" />
              </div>

              <div class="col-6 text-right">
                <VideoPlayerControlsBadge v-if="showButton('liveBadge')" />
              </div>
            </div>
          </div>

          <div class="container-fluid pb-2 gradient-bottom controls-bottom">
            <VideoPlayerControlsContainer
              :isConnected="cast.isConnected"
              :showButton="showButton"
              :currentTime="currentTime"
              :streamId="queryParams.streamId"
            />
          </div>
        </div>

        <VideoPlayerMedia ref="element" />

        <div
          class="overlay d-flex justify-content-center align-items-center"
          v-if="isLoading"
        >
          <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div
          class="overlay d-flex flex-row justify-content-center align-items-center"
          v-if="cast.device"
        >
          <div class="d-flex flex-column ml-3">
            <h3>Casting to</h3>
            <h1 class="font-weight-bold">{{ cast.device.friendlyName }}</h1>
          </div>
        </div>

        <div
          v-if="autoPlayMuted && isLive"
          @click="tapUnmute"
          class="overlay tap-unmute d-flex align-items-center justify-content-center"
        >
          <div>
            <div class="d-flex justify-content-center">
              <i class="ml-viewer-bi-volume-mute-fill pb-0"></i>
            </div>
            <p class="text-center tap-text">Tap to unmute</p>
          </div>
        </div>
      </div>
      <div
        class="side-panel overflow-auto sc1 mv-col-3"
        :style="'scroll-snap-type: y mandatory'"
        v-if="sourceRemoteTracks.length && isSplittedView"
        @mousemove="showControls"
      >
        <VideoPlayerSideVideoSources />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayerMedia from './VideoPlayerMedia.vue'
import VideoPlayerSideVideoSources from './VideoPlayerSideVideoSources.vue'
import { mapMutations, mapState } from 'vuex'
import {
  VideoPlayerControlsBadge,
  VideoPlayerControlsUserCount,
  VideoPlayerControlsContainer,
} from './VideoPlayerControls'

export default {
  name: 'VideoPlayerContainer',
  components: {
    VideoPlayerMedia,
    VideoPlayerControlsBadge,
    VideoPlayerControlsUserCount,
    VideoPlayerControlsContainer,
    VideoPlayerSideVideoSources,
  },
  data() {
    return {
      show: true,
      timeInterval: 0,
      secondsElapsed: 0,
      cast: { isConnected: false },
      controlsTimeout: 0,
      mobileFullscreen: false,
    }
  },
  mounted() {
    screen.orientation?.addEventListener('change', this.handleOrientationChange)

    this.controlsTimeout = setTimeout(() => {
      this.show = false
    }, 4000)

    this.timeInterval = setInterval(() => {
      if (this.playing) {
        this.secondsElapsed++
      }
    }, 1000)

    this.setCastOptions({
      streamId: this.queryParams.streamId,
      token: this.queryParams.token,
      loading: this.isLoading,
    })
  },
  beforeUnmount() {
    clearInterval(this.timeInterval)
  },
  computed: {
    ...mapState('Params', {
      queryParams: (state) => state.queryParams,
    }),
    ...mapState('Sources', {
      videoSources: (state) => state.videoSources,
      audioSources: (state) => state.audioSources,
      selectedVideoSource: (state) => state.selectedVideoSource,
      selectedAudioSource: (state) => state.selectedAudioSource,
      sourceRemoteTracks: (state) => state.sourceRemoteTracks,
    }),
    ...mapState('Controls', {
      video: (state) => state.video,
      playing: (state) => state.playing,
      player: (state) => state.player,
      fullscreen: (state) => state.fullscreen,
      dropup: (state) => state.dropup,
      isLoading: (state) => state.isLoading,
      volume: (state) => state.volume,
      playerMuted: (state) => state.muted,
      castIsConnected: (state) => state.castIsConnected,
      castDevice: (state) => state.castDevice,
      srcObject: (state) => state.srcObject,
      autoPlayMuted: (state) => state.autoPlayMuted,
      isLive: (state) => state.isLive,
      isSplittedView: (state) => state.isSplittedView,
    }),
    currentTime: function () {
      let seconds = this.secondsElapsed
      let minutes = Math.floor(seconds / 60)
      minutes = minutes >= 10 ? minutes : '0' + minutes
      seconds = Math.floor(seconds % 60)
      seconds = seconds >= 10 ? seconds : '0' + seconds
      return minutes + ':' + seconds
    },
  },
  methods: {
    ...mapMutations('Layers', ['deleteLayers']),
    ...mapMutations('Sources', ['deleteSource']),
    ...mapMutations('Controls', [
      'setVideo',
      'setIsLive',
      'setIsLoading',
      'setTrackWarning',
      'setDropup',
      'setVideoVolume',
      'setVideoMuted',
      'setPlaying',
      'setCastOptions',
      'setAutoPlayMuted',
      'toggleFullscreen',
    ]),
    showControls() {
      if (this.controlsTimeout) {
        clearTimeout(this.controlsTimeout)
      }
      this.show = true
      this.hideControls()
    },
    hideControls() {
      if (!this.playing || this.dropup !== '') return
      this.controlsTimeout = setTimeout(() => {
        this.show = false
      }, 4000)
    },
    showButton(button) {
      return !this.queryParams.hideButtons.includes(button)
    },
    handleOrientationChange() {
      const orientation = screen.orientation.type
      if (
        orientation === 'portrait-primary' &&
        getFullscreenElement() &&
        !this.mobileFullscreen
      ) {
        this.leaveFullScreen()
        // portrait mode
      } else if (orientation === 'landscape-primary') {
        this.goFullScreen()
      }
    },
    goFullScreen() {
      const player = this.$refs.player
      player.requestFullscreen?.() ??
        player.webkitRequestFullscreen?.() ??
        player.mozRequestFullScreen?.() ??
        player.msRequestFullscreen?.()
    },
    leaveFullScreen() {
      document.exitFullscreen?.() ??
        document.webkitExitFullscreen?.() ??
        document.mozCancelFullScreen?.() ??
        document.msExitFullscreen?.()
    },
    tapUnmute() {
      this.setVideoMuted(false)
      this.setAutoPlayMuted(false)
    },
  },
  watch: {
    playing: function (playing) {
      if (playing) {
        this.hideControls()
      } else {
        this.showControls()
      }
    },
    fullscreen: function () {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture()
      }
      if (!getFullscreenElement()) {
        this.mobileFullscreen = true
        this.goFullScreen()
      } else {
        this.mobileFullscreen = false
        this.leaveFullScreen()
      }
    },
    dropup: function () {
      this.showControls()
    },
    token: function () {
      this.setCastOptions({
        streamId: this.queryParams.streamId,
        token: this.queryParams.token,
        loading: this.isLoading,
      })
    },
    castIsConnected: function (isConnected) {
      if (isConnected) {
        this.setPlaying(false)
        this.setIsLoading(false)
        const device = this.castDevice
        this.cast = { isConnected, device }
        this.showControls()
      } else {
        this.cast = { isConnected }
      }
    },
    queryParams: function () {
      this.setCastOptions({
        streamId: this.queryParams.streamId,
        token: this.queryParams.token,
        loading: this.isLoading,
      })
    },
  },
}

const getFullscreenElement = () => {
  return document.fullscreenElement || document.webkitFullscreenElement
}
</script>

<style lang="scss" scoped>
.player {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: none;
  overflow: hidden;
  &.show {
    cursor: auto;
  }
}

.controls {
  position: absolute;
  width: 100%;
  height: 100%;
}

.gradient-top {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  transition: top 0.3s ease-in-out;
  top: -10rem;

  &.show {
    top: 0;
  }
}

.gradient-bottom {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  transition: bottom 0.3s ease-in-out;
  bottom: -10rem;

  &.show {
    bottom: 0;
  }
}

:deep(i) {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
}

:deep(.control-icon) {
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  .spinner-border {
    width: 3rem;
    height: 3rem;
  }

  img {
    height: 8rem;
  }

  h1,
  h3 {
    margin-bottom: 0;
  }
}

:deep(.mobile-setting) {
  display: inline;
}

.controls-top {
  position: absolute;
  top: 0;
  margin-bottom: -55px;
  z-index: 1;
}

.controls-bottom {
  position: absolute;
  bottom: 0;
  margin-top: -50px;
  z-index: 1;
}

.side-panel {
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.013);
  padding-right: 0;
  height: fit-content;
  width: 100%;
}

.sc1::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  margin-right: 10px;
}
.sc1::-webkit-scrollbar-track {
  border-radius: 10px;
  border: solid 3px black;
}
.sc1::-webkit-scrollbar-thumb {
  background-color: #a9a9aa;
  border-radius: 10px;
  border: solid 3px black;
}

.tap-unmute {
  z-index: 2;
}

.tap-text {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.ml-viewer-bi-volume-mute-fill {
  color: white;
  font-size: 6rem;
  cursor: default;
}
</style>
