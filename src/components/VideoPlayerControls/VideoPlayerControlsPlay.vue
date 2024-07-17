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
      drmAudio: (state) => state.drmAudio,
      playing: (state) => state.playing,
    }),
    ...mapState('Params', {
      viewer: (state) => state.viewer,
    }),
  },
  methods: {
    togglePlay: async function () {
      if (this.playing) {
        await this.video.pause()
        await this.drmAudio?.pause()
      } else if (this.video?.srcObject !== null || this.viewer.enableDrm) {
        //For DRM streams srcObject never exists on the video.
        await connectToStream()
        await this.video.play()
        await this.drmAudio?.play()
      }
    },
  },
}
</script>
