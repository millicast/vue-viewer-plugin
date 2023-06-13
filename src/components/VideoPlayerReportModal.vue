<template>
  <base-modal :toggle="close">
    <template v-slot:modal-header>
      <div class="header">
        <span class="ml-viewer-bi-flag-fill align-middle"></span>
        <h3 v-text="title"></h3>
      </div>
    </template>
    <template v-slot:modal-body>
      <form id="reportForm" @submit.prevent="sendReport">
        <div class="form-group">
          <label for="name-input">Name</label>
          <input
            type="text"
            class="form-control"
            id="name-input"
            placeholder="Full name"
            v-model="report.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email-input">Email</label>
          <input
            type="email"
            class="form-control"
            id="email-input"
            placeholder="name@example.com"
            v-model="report.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="description-input">Description</label>
          <textarea
            class="form-control"
            id="description-input"
            rows="4"
            v-model="report.description"
            required
          ></textarea>
        </div>
      </form>
    </template>

    <template v-slot:modal-footer>
      <base-button btype="btn-secondary" @click="close">Cancel</base-button>
      <base-button
        type="submit"
        btype="btn-p"
        form="reportForm"
        :disabled="isLoading"
        >Submit</base-button
      >
    </template>
  </base-modal>
</template>

<script>
import { Logger } from '@millicast/sdk'
import { useToast } from 'vue-toastification'
import { mapState } from 'vuex'

export default {
  name: 'VideoPlayerReportModal',
  props: {
    close: Function,
    streamId: String,
  },
  data() {
    return {
      title: 'Report playback issue',
      report: {
        from: 'Viewer',
        name: '',
        email: '',
        description: '',
        streamId: '',
        accountId: '',
        serverId: '',
        clusterId: '',
        url: '',
        log: [],
        statsInitialized: false,
      },
      localStats: [],
      isLoading: false,
    }
  },
  methods: {
    async sendReport() {
      if (this.isLoading) return

      let log = Logger.getHistory()
      for (let i = 0; i < this.localStats.length; i++) {
        log.push(
          '[PeerConnectionStats] - ' + JSON.stringify(this.localStats[i])
        )
      }

      this.report.log = log
      const toast = useToast()
      try {
        this.isLoading = true
        const headers = { 'Content-Type': 'application/json' }
        this.report.serverId =
          this.millicastView?.signaling?.serverId ?? 'NOT_CONNECTED'
        this.report.clusterId =
          this.millicastView?.signaling?.clusterId ?? 'NOT_CONNECTED'
        await fetch(this.reportUrl + '/reports', {
          method: 'POST',
          headers,
          body: JSON.stringify(this.report),
        })
        toast.success('Report sent successfully', { timeout: 3000 })
      } catch (err) {
        let message = "Error: couldn't send report"
        if (err.response?.data) {
          message += ', ' + err.response.data
        }
        toast.error(message, { timeout: 3000 })
      } finally {
        this.isLoading = false
        this.close()
      }
    },
    statsHandler(stats) {
      const MAX_STATS_LENGTH = 40

      this.localStats.push(stats)
      if (this.localStats.length >= MAX_STATS_LENGTH) {
        this.localStats = this.localStats.slice(-MAX_STATS_LENGTH)
      }
    },
  },
  computed: {
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
    ...mapState('Params', {
      reportUrl: (state) => state.queryParams.reportUrl,
    }),
  },
  mounted() {
    this.report.accountId = this.streamId?.match(/^(.*?)\/.*$/)[1]
    this.report.streamId = this.streamId?.match(/^.*?\/(.*)$/)[1]
    this.report.url = window.location.href
    if (
      this.millicastView?.webRTCPeer &&
      !this.millicastView?.webRTCPeer?.peerConnectionStats
    ) {
      this.millicastView.webRTCPeer.initStats()
      this.statsInitialized = true
    }
    this.millicastView.webRTCPeer.on('stats', this.statsHandler)
  },
  beforeUnmount() {
    if (this.statsInitialized) {
      this.millicastView.webRTCPeer.stopStats()
    }
    this.millicastView.webRTCPeer.removeListener('stats', this.statsHandler)
  },
}
</script>

<style scoped>
.ml-viewer-bi-flag-fill {
  display: block;
  color: #40308e;
  font-size: 3rem;
  text-align: center;
}

.header {
  margin: auto;
}

#description-input {
  resize: none;
}
</style>
