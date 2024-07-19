<template>
  <div
    class="container-fluid align-container"
    @mousemove="showControls"
  >
    <!-- SPINNER -->
    <div
      class="overlay spinner-container"
      v-if="isLoading"
    >
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- TAP TO UNMUTE OVERLAY -->
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
    <!-- SOURCES -->
    <div 
      class="mx-0"
      :id="videoSources.length > 1 && !isGrid && isSplittedView ? 'lcontainer' : ''"
      :class="videoSources.length > 1 && isGrid && isSplittedView ? 'grid-container': 'list-container'"
      >
      <!-- MAIN SOURCE -->
      <div
        id="vplayer"
        ref="player"
        class="player"
        :class="{
          show: show,
          'limit-screen': videoSources.length > 1 && isSplittedView && !isGrid,
          'grid-player': videoSources.length > 1 && isSplittedView && isGrid,
          'video-full-screen': isMainVideoFullScreen && isGrid
        }"
        :style="{
        cursor: isGrid? 'pointer' : '',
        }"
        @dblclick="toggleFullscreen"
      >
        <!-- SOURCE -->
        <div
          id="main-source"
          @click="handleWholeScreen"
          :style="{
            height: !isSplittedView ? '100%' : ''
          }"
        >
          <VideoPlayerMedia ref="element" />
        </div>
        <!-- CONTROLS -->
        <div 
          id="controls" 
          class="controls" 
          v-if="viewer.controls"
        > 
          <!-- TOP CONTROLS -->
          <div 
            class="gradient-top controls-top container-fluid pt-3"
            :class="{ hide: !show }"
          >
            <div class="row">
              <div class="col-6 text-left">
                <VideoPlayerControlsUserCount v-if="showButton('userCount')" />
              </div>
              <div class="col-6 text-right">
                <VideoPlayerControlsBadge v-if="showButton('liveBadge')" />
              </div>
            </div>
          </div>
          <!-- BOTTOM CONTROLS -->
          <div
            :class="{ hide: !show }" 
            class="gradient-bottom controls-bottom container-fluid pb-3"
          >
            <VideoPlayerControlsContainer
              :isConnected="cast.isConnected"
              :showButton="showButton"
              :currentTime="currentTime"
              :streamId="viewer.streamId"
            />
          </div>
        </div>
        <!-- CASTING TO -->
        <div
          class="overlay d-flex flex-row justify-content-center align-items-center"
          v-if="cast.device"
        >
          <div class="d-flex flex-column ml-3">
            <h3>Casting to</h3>
            <h1 class="font-weight-bold">{{ cast.device.friendlyName }}</h1>
          </div>
        </div>
      </div>
      <!-- SIDE SOURCES -->
      <div
        v-if="videoSources.length > 0"
        :class="{
          'side-panel overflow-auto sc1': !isGrid,
          'hide-sidebar': !isSplittedView || videoSources.length === 1
         }"
        :style="!isGrid ? 'scroll-snap-type: y mandatory': 'display: contents'"
        @mousemove="showControls"
      >
        <VideoPlayerSideVideoSources :class="isGrid ? 'side-sources' : ''"/>
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
import { selectSource } from '../service/sdkManager'
import CustomToast from '../service/utils/toast'

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
      toast: new CustomToast(),
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
      streamId: this.viewer.streamId,
      token: this.viewer.token,
      loading: this.isLoading,
    })
  },
  beforeUnmount() {
    clearInterval(this.timeInterval)
  },
  computed: {
    ...mapState('Params', {
      viewer: (state) => state.viewer,
    }),
    ...mapState('Errors', {
      type: (state) => state.type,
      message: (state) => state.message,
      showError: (state) => state.showError,
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
      isMainVideoFullScreen: (state) => state.isMainVideoFullScreen,
      volume: (state) => state.volume,
      playerMuted: (state) => state.muted,
      castIsConnected: (state) => state.castIsConnected,
      castDevice: (state) => state.castDevice,
      srcObject: (state) => state.srcObject,
      autoPlayMuted: (state) => state.autoPlayMuted,
      isLive: (state) => state.isLive,
      isSplittedView: (state) => state.isSplittedView,
      hideToast: (state) => state.hideToast,
      isGrid: (state) => state.isGrid
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
    ...mapMutations('Errors', ['setShowError']),
    ...mapMutations('Sources', ['deleteSource', 'setMainLabel']),
    ...mapMutations('Controls', [
      'setVideo',
      'setIsLive',
      'setIsLoading',
      'setIsMainVideoFullScreen',
      'setTrackWarning',
      'setDropup',
      'setVideoVolume',
      'setVideoMuted',
      'setPlaying',
      'setCastOptions',
      'setAutoPlayMuted',
      'toggleFullscreen',
      'setIsSplittedView'
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
      let showButton = !this.viewer.hideButtons.includes(button)
      if (showButton && button === 'fullscreen') {
        let player = document.getElementById('player') ?? document.getElementById('player2')
        if (!player) {
          // Temporarly create a video element to check if the browser supports fullscreen (iPhone fallback)
          player = document.createElement('video')
        }
        showButton &&= (document.fullscreenEnabled || 
        document.webkitFullscreenEnabled || 
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled ||
        player?.requestFullscreen ||
        player?.webkitEnterFullscreen)
        if(!showButton) {
          console.warn('Fullscreen disabled due to incompatibility with the browser.')
        }
      }
      return showButton
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
      const playerDiv = document.getElementById('vplayer')
      //Fallback for when requestFullScreen is not avaiable in a div but it is for a video tag
      const videoPlayer = document.getElementById('player') ?? document.getElementById('player2')
      playerDiv?.requestFullscreen?.() ??
        playerDiv?.webkitRequestFullscreen?.() ??
        playerDiv?.mozRequestFullScreen?.() ??
        playerDiv?.msRequestFullscreen?.() ??
        videoPlayer?.webkitEnterFullscreen?.();
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
    handleWholeScreen() {
      if (this.isGrid) {
        this.setIsMainVideoFullScreen(!this.isMainVideoFullScreen)
      } else {
        selectSource({kind:'video', source: this.videoSources[0]})
        this.setMainLabel(this.videoSources[0].sourceId ?? this.videoSources[0].name)
      }
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
        streamId: this.viewer.streamId,
        token: this.viewer.token,
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
    viewer: function () {
      this.setCastOptions({
        streamId: this.viewer.streamId,
        token: this.viewer.token,
        loading: this.isLoading,
      })
    },
    showError: function (newVal) {
      if (newVal && this.type === 'SubscriberError') {
        this.toast.showToast('error', this.message)
      } else {
        this.setShowError(false)
      }
    },
  },
}

const getFullscreenElement = () => {
  return document.fullscreenElement || document.webkitFullscreenElement
}
</script>

<style>
.video-full-screen {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
.player {
  position: relative;
  width: 100%;
  cursor: none;
  &.show {
    cursor: auto;
  }
}

.grid-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: auto;
  overflow: auto;
  scrollbar-width: none;
  padding: 10px;
  flex-grow: 0.6;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.hide-sidebar {
  display: none !important;
}

.controls {
  position: absolute;
  width: 100%;
  height: 100%;
}

.align-container {
  align-self: center
}

.side-sources {
  display: contents;
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

  &.hide {
    display: none;
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

  &.hide {
    display: none;
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
  position: fixed;
  top: 0;
  right: 0;
  margin-bottom: -55px;
  z-index: 2;
}

.controls-bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-top: -50px;
  z-index: 2;
}

.side-panel {
  border-radius: 0.4rem;
  background: none;
  padding-right: 0;
  height: 100%;
  width: 100%;
  align-self: center
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
.ml-viewer {
  text-align: -webkit-center;
  height: 100%;
  
  padding: 0;
}

.ml-viewer-bi-volume-mute-fill {
  color: white;
  font-size: 6rem;
  cursor: default;
}

.grid-container[max-width~='429.98px'] {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

#vplayer[max-width~='991.98px'] :deep(.side-panel){
  align-self: center;
}

#vplayer[max-width~='429.98px'] :deep(.align-container){
  height: 100%;
}

#vplayer[max-width~='429.98px'] :deep(.side-panel){
  scroll-snap-type: y mandatory;
  display: flex;
}

#lcontainer {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
  padding: 10px;
}

#lcontainer[max-width~='429.98px'] {
  grid-template-columns: 1fr;
  gap: 10px;
}

#lcontainer[max-width~='429.98px'] :deep(#vplayer) {
  align-items: end;
  margin: 0;
}

#vplayer {
  position: relative;
  display: flex;
  margin: auto;
}

.list-container {
  width: 100%;
}

#main-source {
  display: flex;
  width: 100%;
  z-index: 1;
}
</style>