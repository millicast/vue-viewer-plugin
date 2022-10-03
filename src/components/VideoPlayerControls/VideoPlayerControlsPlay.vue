<template>
  <i
    class="h3 align-middle control-icon"
    :class="{
      'ml-viewer-bi-play-fill': !playing,
      'ml-viewer-bi-pause-fill': playing,
    }"
    @click="togglePlay"
  ></i>
</template>

<script>
import { mapState } from 'vuex'
import { connectToStream } from '../../service/sdkManager'

export default {
  name: 'VideoPlayerControlsPlay',
  computed: {
    ...mapState('Controls', {
      video: (state) => state.video,
      playing: (state) => state.playing,
    }),
  },
  methods: {
    togglePlay: async function () {
      if (this.playing) {
        await this.video.pause()
      } else if (this.video?.srcObject !== null) {
        await connectToStream()
        await this.video.play()
      }
    },
  },
}
</script>
