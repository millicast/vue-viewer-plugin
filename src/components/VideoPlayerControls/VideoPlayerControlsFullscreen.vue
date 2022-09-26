<template>
  <template v-if="isMobile">
    <a class="dropdown-item" @click="click">
      <i class="align-middle control-icon" :class="{ 'ml-viewer-bi-fullscreen': !fullscreen, 'ml-viewer-bi-fullscreen-exit': fullscreen }"></i> 
      Full Screen
    </a>
  </template>

  <template v-else>
    <i class="h3 align-middle control-icon" :class="{ 'ml-viewer-bi-fullscreen': !fullscreen, 'ml-viewer-bi-fullscreen-exit': fullscreen }" @click="click"></i>
  </template>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsFullscreen',
  props: {
    click: Function
  },
  data () {
    return {
      fullscreen: document.fullscreenElement !== null
    }
  },
  mounted () {
    document.onfullscreenchange = () => {
      this.fullscreen = document.fullscreenElement !== null
    }
  },
  computed: {
    ...mapState('Controls', {
      isMobile: state => state.isMobile,
    })
  }
}
</script>