<template>
    <table class="table table-sm table-dark table-borderless fixed-top">
        <thead>
            <tr class="row" style="justify-content: flex-end">
                <th colspan="2" class="text-right">
                    <i class="bi ml-viewer-bi-x-lg" @click="close"></i>
                </th>
            </tr>
            <tr class="row">
                <th scope="col" class="col-6">Name</th>
                <th scope="col" class="col-6">Value</th>
            </tr>
        </thead>
        <tbody
            v-if="hasStats"
            :style="[isMobile ? 'overflow-x: auto;' : 'overflow-x: hidden;']"
        >
            <tr v-if="millicastView.signaling.subscriberId" class="row">
                <td class="col-6">Server Id</td>
                <td class="col-6">
                    {{ millicastView.signaling.subscriberId }}
                </td>
            </tr>
            <tr v-if="stats.currentRoundTripTime" class="row">
                <td class="col-6">RTT</td>
                <td class="col-6">
                    {{ formatMilliseconds(stats.currentRoundTripTime) }}
                </td>
            </tr>
            <tr v-if="video?.frameWidth && video?.frameHeight" class="row">
                <td class="col-6">Video Resolution</td>
                <td class="col-6">
                    {{ `${video.frameWidth}x${video.frameHeight}` }}
                </td>
            </tr>
            <tr v-if="video?.framesPerSecond && fps" class="row">
                <td class="col-6">FPS (Calculated)</td>
                <td class="col-6">{{ video.framesPerSecond }} ({{ fps }})</td>
            </tr>
            <tr v-if="video?.bitrate" class="row">
                <td class="col-6">Video Bitrate</td>
                <td class="col-6">{{ formatBitrate(video.bitrate) }}</td>
            </tr>
            <tr v-if="audio?.bitrate" class="row">
                <td class="col-6">Audio Bitrate</td>
                <td class="col-6">{{ formatBitrate(audio.bitrate) }}</td>
            </tr>
            <tr v-if="video?.totalBytesReceived" class="row">
                <td class="col-6">Video Total Received</td>
                <td class="col-6">
                    {{ formatTotalBytes(video.totalBytesReceived) }}
                </td>
            </tr>
            <tr v-if="audio?.totalBytesReceived" class="row">
                <td class="col-6">Audio Total Received</td>
                <td class="col-6">
                    {{ formatTotalBytes(audio.totalBytesReceived) }}
                </td>
            </tr>
            <tr v-if="video?.totalPacketsLost !== undefined" class="row">
                <td class="col-6">Video Packet Loss</td>
                <td class="col-6">{{ video.totalPacketsLost }}</td>
            </tr>
            <tr v-if="audio?.totalPacketsLost !== undefined" class="row">
                <td class="col-6">Audio Packet Loss</td>
                <td class="col-6">{{ audio.totalPacketsLost }}</td>
            </tr>
            <tr v-if="video?.jitter !== undefined" class="row">
                <td class="col-6">Video Jitter</td>
                <td class="col-6">{{ formatMilliseconds(video.jitter) }}</td>
            </tr>
            <tr v-if="audio?.jitter !== undefined" class="row">
                <td class="col-6">Audio Jitter</td>
                <td class="col-6">{{ formatMilliseconds(audio.jitter) }}</td>
            </tr>
            <tr v-if="videoCaptureTimestamp" class="row">
                <td class="col-6">Capture timestamp</td>
                <td v-text="videoCaptureTimestamp" class="col-6"></td>
            </tr>
            <tr v-if="videoCaptureDelta" class="row">
                <td class="col-6">Capture delta time</td>
                <td v-text="videoCaptureDelta" class="col-6"></td>
            </tr>
            <tr v-if="codecs" class="row">
                <td class="col-6">Codecs</td>
                <td v-text="codecs" class="col-6 text-break"></td>
            </tr>
            <tr v-if="timestamp" class="row">
                <td class="col-6 text-break">Timestamp</td>
                <td v-text="timestamp" class="col-6"></td>
            </tr>
            <tr v-if="serverId" class="row">
                <td class="col-6 text-break">Server</td>
                <td v-text="serverId" class="col-6"></td>
            </tr>
            <tr v-if="clusterId" class="row">
                <td class="col-6 text-break">Cluster</td>
                <td v-text="clusterId" class="col-6"></td>
            </tr>
            <tr v-if="isMobile" class="row">
                <td class="col-12 center"></td>
            </tr>
            <tr v-if="isMobile" class="row">
                <td class="col-12" align="center">
                    <a @click="close" style="cursor: pointer">Close stats</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from 'vuex'

const bytesUnitsStorage = ['B', 'KB', 'MB', 'GB', 'TB']
const bitsUnitsStorage = ['bps', 'kbps', 'mbps', 'gbps']

export default {
    name: 'VideoPlayerStatsTable',
    props: {
        close: Function,
    },
    data() {
        return {
            stats: {},
            fps: 0,
            totalFps: 0,
        }
    },
    mounted() {
        this.millicastView.webRTCPeer.initStats()
        this.millicastView.webRTCPeer.on('stats', (peerStats) => {
            window.peer?.getReceivers?.().forEach?.((receiver) => {
                this.stats.videoSynchronizationSources =
                    receiver.track.kind === 'video'
                        ? receiver.getSynchronizationSources()
                        : this.stats.videoSynchronizationSources
            })
            this.stats = { ...this.stats, ...peerStats }
        })
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
        setFps(totalFps) {
            this.fps = totalFps - this.totalFps
            this.totalFps = totalFps
        },
    },
    computed: {
        ...mapState('Controls', {
            isMobile: (state) => state.isMobile,
        }),
        ...mapState('ViewConnection', {
            millicastView: (state) => state.millicastView,
        }),
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
            for (const report of this.stats.raw?.values()) {
                if (report.type === 'inbound-rtp' && report.kind === 'video') {
                    this.setFps(report.framesReceived)
                }
            }
            if (video?.length > 0) {
                return video[0]
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
                    this.stats.videoSynchronizationSources?.[0].timestamp -
                    captureTime
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

const formatBitsRecursive = (value, unitsStoragePosition = 0) => {
    const newValue = value / 1000
    if (
        newValue < 1 ||
        (newValue > 1 && unitsStoragePosition + 1 > bitsUnitsStorage.length)
    ) {
        return `${Math.round(value * 100) / 100} ${
            bitsUnitsStorage[unitsStoragePosition]
        }`
    } else if (newValue > 1) {
        return formatBitsRecursive(newValue, unitsStoragePosition + 1)
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
.ml-viewer .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
}
thead,
tbody {
    display: block;
}
tr {
    margin: 0;
}

tbody {
    max-height: 60vh;
    overflow-y: auto;
}
i {
    padding: 0.3rem;
}
</style>
