<template>
  <a class="dropdown-item" v-if="clientStats" @click="downloadClientStats">
    <i class="ml-viewer-bi-download align-middle control-icon"></i>
    Download client stats
  </a>
</template>

<script>
import { DebugCapture } from '@millicast/sdk';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'VideoPlayerControlsSettingsClientStats',
  computed: {
    ...mapState('Params', {
      clientStats: (state) => state.viewer.clientStats,
    }),
  },
  methods: {
    ...mapMutations('Controls', ['setDropup']),
    async downloadClientStats() {
      try {
        await DebugCapture.download();
      } catch (error) {
        console.warn('Failed to download client stats.', error);
      }
      this.setDropup('');
    },
  },
};
</script>
