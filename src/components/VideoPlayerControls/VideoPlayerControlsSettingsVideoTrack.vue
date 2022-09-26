<template>
  <a class="dropdown-item d-flex align-items-center pr-0 justify-content-between" @click="setDropup('videoTracks')">
    <span class="back-header mr-2">
    <i class="bi ml-viewer-bi-camera-video-fill">
      <span v-if="this.selectedVideoSource.name === 'none'" class="badge bg-danger"> </span>
      </i>
      Video Source:
    </span>
    <div class="dropdown-item-name mr-auto" :class="[this.selectedVideoSource.name === 'none' ? 'none' : '', this.selectedVideoSource.sourceId === null ? 'main' : '']">
      <span v-if="unsupportedFlagEmoji(this.selectedVideoSource.name)" v-html="sourceFlagEmojiToPng(this.selectedVideoSource.name)"></span>
      <span v-else>{{this.selectedVideoSource.name}}</span>
    </div> 
    <div class="back-arrow">
      <i class="bi ml-viewer-bi-chevron-right ml-auto py-0"></i>
    </div>
  </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VideoPlayerControlsSettingsQuality',
    props:{
    unsupportedFlagEmoji:Function,
    sourceFlagEmojiToPng:Function
  },
  computed: {
    ...mapState('Sources',{
      selectedVideoSource: state => state.selectedVideoSource
    }),    
  },
  methods: {
    ...mapMutations(
      'Controls', ['setDropup']
    ),
  },

}
</script>

<style scoped>
  .ml-viewer-bi-camera-video-fill .badge {
    display: inline-block;
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    color: #dc3545;
    padding: 0;
  }

  .none {
    color: grey
  }

  .main {
    font-style: italic;
  }
</style>