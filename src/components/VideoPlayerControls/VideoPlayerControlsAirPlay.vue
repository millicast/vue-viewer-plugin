<template>
  <div
    :class="[isMobile ? 'dropdown-item d-flex row mx-0' : 'mobile-setting']"
    v-if="airPlayAvailable"
    @click="clickAirPlay"
  >
    <div :class="[isMobile ? '' : 'mobile-setting']">
      <i class="ml-viewer-bi-cast h3 align-middle control-icon"></i>
    </div>
    <div v-if="isMobile">
      <span class="align-middle">AirPlay</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { handleCastWithAirPlay } from '../../service/utils/airplay'

export default {
  name: 'VideoPlayerControlsAirPlay',
  computed: {
    ...mapState('Controls', {
      isMobile: (state) => state.isMobile,
      airPlayAvailable: (state) => state.airPlayAvailable,
    }),
  },
  methods: {
    clickAirPlay() {
      handleCastWithAirPlay()
    },
  },
}
</script>

<style lang="scss" scoped></style>
