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
import { mapState } from 'vuex'
import CustomToast from '../service/utils/toast'

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
        diagnostics: {},
        url: '',
      },
      toast: new CustomToast(),
      isLoading: false,
    }
  },
  methods: {
    async sendReport() {
      if (this.isLoading) return

      this.report.diagnostics = Logger.diagnose()

      try {
        this.isLoading = true
        const headers = { 'Content-Type': 'application/json' }
        this.report.diagnostics.serverId =
          this.report.diagnostics?.subscriberId ?? 'NOT_CONNECTED'
        this.report.diagnostics.clusterId =
          this.report.diagnostics?.clusterId ?? 'NOT_CONNECTED'
        await fetch(this.reportUrl + '/reports', {
          method: 'POST',
          headers,
          body: JSON.stringify(this.report),
        })
        this.toast.showToast('success','Report sent successfully', { timeout: 3000 })
      } catch (err) {
        let message = "Error: couldn't send report"
        if (err.response?.data) {
          message += ', ' + err.response.data
        }
        this.toast.showToast('error',message, { timeout: 3000 })
      } finally {
        this.isLoading = false
        this.close()
      }
    },
  },
  computed: {
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
    ...mapState('Params', {
      reportUrl: (state) => state.environment.VUE_APP_REPORT_URL,
    }),
  },
  mounted() {
    this.report.url = window.location.href
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
