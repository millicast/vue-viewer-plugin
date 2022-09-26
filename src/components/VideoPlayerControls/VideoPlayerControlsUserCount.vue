<template>
  <h4 class="align-middle" v-if="count">
      <span class="badge" style="border: 0px">
        <i class="bi ml-viewer-bi-person-fill"></i>
        {{count}}
      </span>
  </h4>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VideoPlayerControlsUserCount',
  computed: {
    ...mapState('Controls', ['viewerCount']),
    count() {
      return this.viewerCount?.toLocaleString('en')
    }
  },
}
</script>

<style lang="scss" scoped>
  i {
    cursor: auto;
    padding: .5rem 0;

    &:hover {
      background: none;
    }
  }
</style>