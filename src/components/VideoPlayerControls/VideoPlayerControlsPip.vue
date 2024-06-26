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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'VideoPlayerControlsPip',
  computed: {
    ...mapState('Controls', {
      isMobile: (state) => state.isMobile,
      pip: (state) => state.pip,
      video: (state) => state.video,
    }),
  },
  methods: {
    ...mapMutations('Controls', ['setPip']),
    togglePip() {
      if (
        !this.pip &&
        this.video.srcObject &&
        this.video.nodeName === 'VIDEO'
      ) {
        this.video.requestPictureInPicture()
        this.setPip(true)
        this.video.addEventListener('leavepictureinpicture', () => {
          this.setPip(false)
          this.video.removeEventListener('leavepictureinpicture', () => {})
        });
      } else {
        document.exitPictureInPicture()
        this.setPip(false)
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
