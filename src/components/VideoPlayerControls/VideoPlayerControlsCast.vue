<template>
  <div
    :class="[isMobile ? 'dropdown-item d-flex row mx-0' : 'mobile-setting']"
    v-if="castAvailable && !options.loading"
    @click="clickCast"
  >
    <div :class="[isMobile ? '' : 'mobile-setting']">
      <i
        class="align-middle control-icon"
        :class="isMobile ? 'mobile-icon' : 'h3'"
      >
        <google-cast-launcher ref="cast"></google-cast-launcher>
      </i>
    </div>
    <div v-if="isMobile">
      <span class="align-middle">Cast</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsCast',
  computed: {
    ...mapState('Controls', {
      isMobile: (state) => state.isMobile,
      castAvailable: (state) => state.castAvailable,
      options: (state) => state.castOptions,
    }),
  },
  methods: {
    clickCast() {
      this.$refs.cast.click()
    },
  },
}
</script>

<style lang="scss" scoped>
google-cast-launcher {
  display: inline-block;
  height: 1.7rem;
  max-width: 1.75rem;
  line-height: 1;
  vertical-align: -0.1em;

  --disconnected-color: #ffffff;
}

.mobile-icon {
  &:hover {
    background: transparent;
  }
}

.mobile-icon google-cast-launcher {
  height: 1.2rem;
}

.dropdown-item:hover google-cast-launcher {
  --disconnected-color: black;
}
</style>
