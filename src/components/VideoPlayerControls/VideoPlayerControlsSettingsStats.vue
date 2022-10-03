<template>
  <a class="dropdown-item" @click="toggleStats" :class="{ disabled: !isLive }">
    <i class="ml-viewer-bi-info-circle-fill align-middle control-icon"></i>
    Media Stats
    <teleport to="#vplayer" v-if="showStats">
      <VideoPlayerStatsTable :close="toggleStats" />
    </teleport>
  </a>
</template>

<script>
import VideoPlayerStatsTable from '../VideoPlayerStatsTable.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsSettingsStats',
  components: {
    VideoPlayerStatsTable,
  },
  data() {
    return {
      stats: {},
      showStats: false,
    }
  },
  computed: {
    ...mapState('Controls', ['isLive']),
  },
  methods: {
    ...mapMutations('Controls', ['setDropup']),
    toggleStats() {
      this.showStats = !this.showStats
      this.setDropup()
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-item.disabled {
  color: grey !important;
  cursor: not-allowed !important;
}
</style>
