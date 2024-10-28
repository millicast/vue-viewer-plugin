<template>
  <template v-if="isMobile">
    <a class="dropdown-item" @click="togglePip">
      <i
        class="align-middle control-icon"
        :class="{
          'ml-viewer-bi-pip': !pip,
          'ml-viewer-bi-pip-fill': pip,
        }"
      ></i>
      Miniplayer
    </a>
  </template>
  <template v-else>
    <div class="mobile-setting" @click="togglePip">
      <i
        class="h3 align-middle control-icon"
        :class="{
          'ml-viewer-bi-pip': !pip,
          'ml-viewer-bi-pip-fill': pip,
        }"
      ></i>
    </div>
  </template>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsPip',
  computed: {
    ...mapState('Controls', {
      isMobile: (state) => state.isMobile,
      pip: (state) => state.pip,
      video: (state) => state.video,
    }),
    ...mapState('Params', {
      viewer: (state) => state.viewer
    })
  },
  methods: {
    togglePip() {
      if (
        !this.pip &&
        (this.video.srcObject || this.viewer.drm) &&
        this.video.nodeName === 'VIDEO'
      ) {
        this.video.requestPictureInPicture()
      } else {
        document.exitPictureInPicture()
      }
    },
  },
}
</script>

<style scoped>
.mobile-icon {
  pointer-events: none;
}
</style>
