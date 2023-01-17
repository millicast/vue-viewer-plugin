<template>
  <template v-if="isMobile">
    <a class="dropdown-item" @click="click">
      <i
        class="align-middle control-icon"
        :class="{
          'ml-viewer-bi-fullscreen': !fullscreen,
          'ml-viewer-bi-fullscreen-exit': fullscreen,
        }"
      ></i>
      Full Screen
    </a>
  </template>

  <template v-else>
    <i
      class="h3 align-middle control-icon"
      :class="{
        'ml-viewer-bi-fullscreen': !fullscreen,
        'ml-viewer-bi-fullscreen-exit': fullscreen,
      }"
      @click="click"
    ></i>
  </template>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsFullscreen',
  props: {
    click: Function,
  },
  data() {
    return {
      fullscreen: false,
    }
  },
  mounted() {
    document.onfullscreenchange = () => {
      this.fullscreen = !!document.fullscreenElement
    }
    const player = document.getElementById('player') ?? document.getElementById('player2')
    player.onwebkitfullscreenchange = () => {
      this.fullscreen = player.fullscreenElement
    }
    this.fullscreen = (!!document.fullscreenElement) || (player.fullscreenElement)
  },
  computed: {
    ...mapState('Controls', {
      isMobile: (state) => state.isMobile,
    }),
  },
}
</script>
