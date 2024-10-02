<template>
  <div class="row">
    <div :class="[isMobile ? 'col-7 text-left pr-0' : 'col-6 text-left']">
      <div v-if="!isConnected">
        <VideoPlayerControlsPlay v-if="showButton('play')" />
        <VideoPlayerControlsVolume v-if="showButton('volume')" />
        <span
          v-if="!isMobile"
          class="h5 align-middle p-2"
          v-text="currentTime"
        ></span>
      </div>
    </div>
    <div class="col-6 text-right" v-if="!isMobile">
      <VideoPlayerControlsSettings
        :streamId="streamId"
        v-if="showButton('settings')"
      />
      <VideoPlayerControlsAirPlay
        v-if="showButton('airplay') && airPlayAvailable"
      />
      <VideoPlayerControlsCast v-if="showButton('cast') && castAvailable" />
      <VideoPlayerControlsPip v-if="pipEnabled" />
      <VideoPlayerControlsFullscreen
        v-if="showButton('fullscreen')"
        :click="toggleFullscreen"
      />
    </div>
    <div class="col-5 pl-0 pr-1 text-right" v-else>
      <VideoPlayerControlsSettings
        :streamId="streamId"
        v-if="showButton('settings')"
      />
      <span
        v-if="
          (showButton('cast') && castAvailable) ||
          (showButton('airplay') && airPlayAvailable) ||
          (isLive && pipEnabled && showButton('pip') && isVideoTag) ||
          showButton('fullscreen')
        "
        class="dropup"
      >
        <i
          class="h3 align-middle control-icon bi ml-viewer-bi-three-dots-vertical"
          @click="setDropup('mobile')"
        ></i>
        <div
          class="dropdown-menu dropdown-menu-right"
          :class="{ show: dropup === 'mobile' }"
          style="margin-bottom: 0.9rem"
        >
          <div class="dropdown-header d-flex m-0 col-12">
            <h6 class="p-0 m-0">Options</h6>
          </div>
          <VideoPlayerControlsAirPlay
            v-if="showButton('airplay') && airPlayAvailable"
          />
          <VideoPlayerControlsCast v-if="showButton('cast') && castAvailable" />
          <VideoPlayerControlsPip v-if="pipEnabled" />
          <VideoPlayerControlsFullscreen
            v-if="showButton('fullscreen')"
            :click="toggleFullscreen"
          />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { setAirPlay, setCast } from '../../service/sdkManager'
import {
  VideoPlayerControlsFullscreen,
  VideoPlayerControlsPip,
  VideoPlayerControlsPlay,
  VideoPlayerControlsSettings,
  VideoPlayerControlsVolume,
} from './index'
import VideoPlayerControlsCast from './VideoPlayerControlsCast.vue'
import VideoPlayerControlsAirPlay from './VideoPlayerControlsAirPlay.vue'

export default {
  name: 'VideoPlayer',
  components: {
    VideoPlayerControlsFullscreen,
    VideoPlayerControlsPip,
    VideoPlayerControlsPlay,
    VideoPlayerControlsSettings,
    VideoPlayerControlsVolume,
    VideoPlayerControlsCast,
    VideoPlayerControlsAirPlay,
  },
  props: {
    showButton: Function,
    streamId: String,
    isConnected: Boolean,
    currentTime: String,
  },
  data() {
    return {
      dropupShow: false,
    }
  },
  computed: {
    ...mapState('Controls', {
      video: (state) => state.video,
      dropup: (state) => state.dropup,
      isMobile: (state) => state.isMobile,
      isLive: (state) => state.isLive,
      castAvailable: (state) => state.castAvailable,
      airPlayAvailable: (state) => state.airPlayAvailable,
    }),
    isVideoTag() {
      return this.video?.nodeName === 'VIDEO'
    },
    pipEnabled() {
      return (
        this.showButton('pip') &&
        document.pictureInPictureEnabled &&
        this.isLive &&
        this.isVideoTag
      )
    },
  },
  methods: {
    ...mapMutations('Controls', ['setDropup', 'toggleFullscreen']),
  },
  async beforeMount() {
    await setCast()
    await setAirPlay()
  },
}
</script>

<style lang="scss" scoped>
.ml-viewer {
  .dropdown-menu,
  .dropdown-menu-right {
    background-color: #343a40;
    margin-bottom: 0.8rem;
    color: rgb(235, 235, 235);

    .dropdown-header {
      color: rgb(235, 235, 235);
    }

    .dropdown-item {
      color: rgb(235, 235, 235);
      cursor: pointer;
      border-bottom: 1px #ffffff;

      &:hover {
        background-color: #ffffff;
        color: #212529;
      }
    }
  }
}
</style>
