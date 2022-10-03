<template>
  <a
    class="dropdown-item d-flex align-items-center pr-0 justify-content-between"
    @click="setDropup('audioTracks')"
  >
    <span class="back-header mr-2">
      <i class="bi ml-viewer-bi-soundwave">
        <span
          v-if="this.selectedAudioSource.name === 'none'"
          class="badge bg-danger"
        >
        </span>
      </i>
      Audio Source:
    </span>
    <div
      class="dropdown-item-name mr-auto"
      :class="[
        this.selectedAudioSource.name === 'none' ? 'none' : '',
        this.selectedAudioSource.sourceId === null ? 'main' : '',
      ]"
    >
      <span
        v-if="unsupportedFlagEmoji(this.selectedAudioSource.name)"
        v-html="sourceFlagEmojiToPng(this.selectedAudioSource.name)"
      ></span>
      <span v-else>{{ this.selectedAudioSource.name }}</span>
    </div>
    <div>
      <i class="bi ml-viewer-bi-chevron-right ml-auto py-0"></i>
    </div>
  </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsSettingsQuality',
  props: {
    unsupportedFlagEmoji: Function,
    sourceFlagEmojiToPng: Function,
  },
  computed: {
    ...mapState('Sources', {
      selectedAudioSource: (state) => state.selectedAudioSource,
    }),
  },
  methods: {
    ...mapMutations('Controls', ['setDropup']),
  },
}
</script>

<style scoped>
.bi-soundwave .badge {
  display: inline-block;
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  color: #dc3545;
  padding: 0;
}

.none {
  color: grey;
}

.main {
  font-style: italic;
}
</style>
