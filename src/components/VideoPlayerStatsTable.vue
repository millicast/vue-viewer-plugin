<template>
  <table class="table table-sm table-dark table-borderless fixed-top">
    <thead>
      <tr
        class="row mx-0 align-items-center"
        :class="
          multiviewStatsAvailable
            ? 'justify-content-between'
            : 'justify-content-end'
        "
      >
        <th v-if="multiviewStatsAvailable" class="d-flex align-items-center">
          <span>Source:</span>
          <select
            class="ml-2 source-select"
            v-model="selectedSourceMid"
            @change="handleSourceChange"
          >
            <option
              v-for="source in getTransceiverSourceState"
              :key="source.sourceId"
              :value="source.mid"
            >
              {{ source.name }}
            </option>
          </select>
        </th>
        <th colspan="2" class="text-right">
          <i class="bi ml-viewer-bi-x-lg" @click="close"></i>
        </th>
      </tr>
      <tr class="row mx-0 text-left">
        <th scope="col" class="col-6">Name</th>
        <th scope="col" class="col-6">Value</th>
      </tr>
    </thead>
    <tbody
      v-if="hasStats"
      :style="[isMobile ? 'overflow-x: auto;' : 'overflow-x: hidden;']"
      class="text-left videoStats"
    >
      <tr v-if="millicastView?.signaling?.subscriberId" class="row mx-0">
        <td class="col-6">Server Id</td>
        <td class="col-6">
          {{ millicastView.signaling.subscriberId }}
        </td>
      </tr>
      <tr v-if="stats.currentRoundTripTime" class="row mx-0">
        <td class="col-6">RTT</td>
        <td class="col-6">
          {{ formatMilliseconds(stats.currentRoundTripTime) }}
        </td>
      </tr>
      <tr v-if="video?.frameWidth && video?.frameHeight" class="row mx-0">
        <td class="col-6">Video Resolution</td>
        <td class="col-6">
          {{ `${video.frameWidth}x${video.frameHeight}` }}
        </td>
      </tr>
      <tr v-if="video?.framesPerSecond" class="row mx-0">
        <td class="col-6">FPS</td>
        <td class="col-6">{{ video.framesPerSecond }}</td>
      </tr>
      <tr v-if="video?.bitrate" class="row mx-0">
        <td class="col-6">Video Bitrate</td>
        <td class="col-6">{{ formatBitrate(video.bitrate) }}</td>
      </tr>
      <tr v-if="audio?.bitrate" class="row mx-0">
        <td class="col-6">Audio Bitrate</td>
        <td class="col-6">{{ formatBitrate(audio.bitrate) }}</td>
      </tr>
      <tr v-if="video?.totalBytesReceived" class="row mx-0">
        <td class="col-6">Video Total Received</td>
        <td class="col-6">
          {{ formatTotalBytes(video.totalBytesReceived) }}
        </td>
      </tr>
      <tr v-if="audio?.totalBytesReceived" class="row mx-0">
        <td class="col-6">Audio Total Received</td>
        <td class="col-6">
          {{ formatTotalBytes(audio.totalBytesReceived) }}
        </td>
      </tr>
      <tr v-if="video?.totalPacketsLost !== undefined" class="row mx-0">
        <td class="col-6">Video Packet Loss</td>
        <td class="col-6">{{ video.totalPacketsLost }}</td>
      </tr>
      <tr v-if="audio?.totalPacketsLost !== undefined" class="row mx-0">
        <td class="col-6">Audio Packet Loss</td>
        <td class="col-6">{{ audio.totalPacketsLost }}</td>
      </tr>
      <tr v-if="video?.jitter !== undefined" class="row mx-0">
        <td class="col-6">Video Jitter</td>
        <td class="col-6">{{ formatMilliseconds(video.jitter) }}</td>
      </tr>
      <tr v-if="audio?.jitter !== undefined" class="row mx-0">
        <td class="col-6">Audio Jitter</td>
        <td class="col-6">{{ formatMilliseconds(audio.jitter) }}</td>
      </tr>
      <tr v-if="videoCaptureTimestamp" class="row mx-0">
        <td class="col-6">Capture timestamp</td>
        <td v-text="videoCaptureTimestamp" class="col-6"></td>
      </tr>
      <tr v-if="videoCaptureDelta" class="row mx-0">
        <td class="col-6">Capture delta time</td>
        <td v-text="videoCaptureDelta" class="col-6"></td>
      </tr>
      <tr v-if="codecs" class="row mx-0">
        <td class="col-6">Codecs</td>
        <td v-text="codecs" class="col-6 text-break"></td>
      </tr>
      <tr v-if="timestamp" class="row mx-0">
        <td class="col-6 text-break">Timestamp</td>
        <td v-text="timestamp" class="col-6"></td>
      </tr>
      <tr v-if="serverId" class="row mx-0">
        <td class="col-6 text-break">Server</td>
        <td v-text="serverId" class="col-6"></td>
      </tr>
      <tr v-if="clusterId" class="row mx-0">
        <td class="col-6 text-break">Cluster</td>
        <td v-text="clusterId" class="col-6"></td>
      </tr>
      <tr v-if="isMobile" class="row mx-0">
        <td class="col-12 center"></td>
      </tr>
      <tr v-if="isMobile" class="row mx-0">
        <td class="col-12" align="center">
          <a @click="close" style="cursor: pointer">Close stats</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { formatBitsRecursive } from '../service/utils/layers'

const bytesUnitsStorage = ['B', 'KB', 'MB', 'GB', 'TB']

export default {
  name: 'VideoPlayerStatsTable',
  props: {
    close: Function,
  },
  data() {
    return {
      stats: {},
      statsIndex: 0,
      selectedSourceMid: null,
      midToStatsIndexMap: {},
    }
  },
  mounted() {
    this.millicastView.webRTCPeer.initStats()
    this.millicastView.webRTCPeer.on('stats', (peerStats) => {
      peerStats.video?.inbounds?.forEach((stat, index) => {
        if (stat.mid) {
          this.midToStatsIndexMap[stat.mid] = index
        }
      })
      window.peer?.getReceivers?.().forEach?.((receiver) => {
        this.stats.videoSynchronizationSources =
          receiver.track.kind === 'video'
            ? receiver.getSynchronizationSources()
            : this.stats.videoSynchronizationSources
      })
      this.stats = { ...this.stats, ...peerStats }
    })
    this.selectedSourceMid = this.getTransceiverSourceState[0]?.mid 
      ?? Object.values(this.getTransceiverSourceState)[0].mid
  },
  beforeUnmount() {
    this.millicastView.webRTCPeer.stopStats()
    this.millicastView.webRTCPeer.removeAllListeners('stats')
  },
  methods: {
    closeTable() {
      this.close()
    },
    formatTotalBytes(value) {
      return formatBytesRecursive(value)
    },
    formatBitrate(value) {
      return formatBitsRecursive(value)
    },
    formatMilliseconds(value) {
      return `${(value || 0) * 1000} ms`
    },
    handleSourceChange() {
      const mid = this.selectedSourceMid ?? 0
      this.statsIndex = this.midToStatsIndexMap[mid]
    },
    selectMidZero() {
      this.selectedSourceMid = this.getTransceiverSourceState[0]?.mid 
        ?? Object.values(this.getTransceiverSourceState)[0].mid
    },
  },
  computed: {
    ...mapState('Controls', [
      'isMobile',
      'isSplittedView'
    ]),
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
    ...mapState('Sources', [
      'sourceRemoteTracks', 
      'videoSources'
    ]),
    ...mapGetters('Sources', [
      'getTransceiverSourceState'
    ]),
    hasStats() {
      return Object.keys(this.stats).length > 0
    },
    audio() {
      const audio = this.stats.audio?.inbounds
      if (audio?.length > 0) {
        return audio[0]
      }
      return null
    },
    video() {
      const video = this.stats.video?.inbounds
      const videoLength = video?.length
      if (videoLength) {
        return video[this.midToStatsIndexMap[this.selectedSourceMid]]
      }
      return null
    },
    codecs() {
      const codecs = []
      if (this.video?.mimeType) {
        codecs.push(this.video.mimeType)
      }
      if (this.audio?.mimeType) {
        codecs.push(this.audio.mimeType)
      }
      return codecs.join()
    },
    timestamp() {
      let timestamp = this.video?.timestamp ?? this.audio?.timestamp
      return timestamp ? new Date(timestamp).toISOString() : null
    },
    videoCaptureTimestamp() {
      let timestamp
      if (
        this.stats.videoSynchronizationSources?.[0]?.captureTimestamp &&
        this.stats.videoSynchronizationSources?.[0]?.timestamp
      ) {
        const captureTime = formatNtpToEpoch(
          this.stats.videoSynchronizationSources[0].captureTimestamp
        )
        timestamp = new Date(captureTime).toISOString()
      }
      return timestamp
    },
    videoCaptureDelta() {
      let delta
      if (
        this.stats.videoSynchronizationSources?.[0]?.captureTimestamp &&
        this.stats.videoSynchronizationSources?.[0]?.timestamp
      ) {
        const captureTime = formatNtpToEpoch(
          this.stats.videoSynchronizationSources[0].captureTimestamp
        )
        delta =
          this.stats.videoSynchronizationSources?.[0].timestamp - captureTime
        delta = `${delta} ms`
      }
      return delta
    },
    serverId() {
      return this.millicastView?.signaling?.serverId
    },
    clusterId() {
      return this.millicastView?.signaling?.clusterId
    },
    multiviewStatsAvailable() {
      const multiviewIsOn = (
        this.videoSources.length > 1 && 
        this.isSplittedView && 
        Object.keys(this.midToStatsIndexMap).length
      )
      if (!multiviewIsOn) {
        this.selectMidZero()
      }
      return multiviewIsOn
    },
  },
}

const formatBytesRecursive = (value, unitsStoragePosition = 0) => {
  const newValue = value / 1024
  if (
    newValue < 1 ||
    (newValue > 1 && unitsStoragePosition + 1 > bytesUnitsStorage.length)
  ) {
    return `${Math.round(value * 100) / 100} ${
      bytesUnitsStorage[unitsStoragePosition]
    }`
  } else if (newValue > 1) {
    return formatBytesRecursive(newValue, unitsStoragePosition + 1)
  }
}

const formatNtpToEpoch = (value) => {
  return value - 2208988800000
}
</script>

<style lang="scss" scoped>
table {
  background-color: #343a40e6;
  max-width: 35rem;
}

.ml-viewer .table td,
.ml-viewer .table th {
  background-color: #343a40e6 !important;
}

thead,
tbody {
  display: block;
}

tr {
  margin: 0;
}

.videoStats {
  max-height: 60vh;
  overflow-y: auto;
}

.videoStats::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  margin-right: 10px;
}

.videoStats::-webkit-scrollbar-track {
  border-radius: 10px;
}

.videoStats::-webkit-scrollbar-thumb {
  background-color: #a9a9aa9e;
  border-radius: 10px;
}

i {
  padding: 0.3rem;
}

.source-select {
  font-size: 0.79rem;
  height: 1.9rem;
  width: 10rem;
  color: white;
  background: #343a40e6;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
