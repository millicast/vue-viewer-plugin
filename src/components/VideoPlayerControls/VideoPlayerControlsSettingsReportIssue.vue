<template>
  <a class="dropdown-item" v-if="showReportButton" @click="toggleReport">
    <i class="ml-viewer-bi-flag-fill align-middle control-icon"></i>
    Report Playback Issue
    <teleport to="#vplayer" v-if="showReportModal">
      <VideoPlayerReportModal :streamId="streamId" :close="toggleReport" />
    </teleport>
  </a>
</template>

<script>
import VideoPlayerReportModal from '../VideoPlayerReportModal.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'VideoPlayerControlsSettingsReportIssue',
  components: {
    VideoPlayerReportModal,
  },
  props: {
    streamId: String,
  },
  data() {
    return {
      showReportModal: false,
      showReportButton: false,
    }
  },
  methods: {
    ...mapMutations('Controls', ['setDropup']),
    toggleReport() {
      this.showReportModal = !this.showReportModal
      this.setDropup('')
    },
  },
  computed: {
    ...mapState('Params', {
      reportUrl(state) {
        this.showReportButton = !!state.queryParams.reportUrl
        return state.queryParams.reportUrl
      }
    }),
  },
  watch: {
    reportUrl(value) {
      this.showReportButton = !!value
    },
  },
}
</script>
