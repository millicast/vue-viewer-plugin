<template>
  <a class="dropdown-item" @click="setIsGrid(!isGrid)">
    <i
      :class="isGrid ? 'bi ml-viewer-bi-grid' : 'bi ml-viewer-bi-grid-1x2'"
      class="align-middle control-icon"
    ></i>
    Change layout
  </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'VideoPlayerControlsSettingsLayout',
  computed: {
    ...mapState('Controls', ['isGrid']),
  },
  methods: {
    ...mapMutations('Controls', ['setIsGrid']),
  },
}
</script>
