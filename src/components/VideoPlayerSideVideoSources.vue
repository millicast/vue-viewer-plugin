<template>
  <div 
    :class="isGrid ? 'sources' : 'list-side'" 
  >
    <div
      :class="isGrid ? 'grid-item' : 'list-item'"
      :style="'scroll-snap-align: end'"
      v-for="(source, index) in sourceRemoteTracks"
      :key="'p' + index"
    >
      <div class="videoText" :class="isGrid ? 'videoGrid' : '' ">
        <video
          v-on:click="() => enableClick && switchProjection(source.transceiver?.mid)"
          :id="`sidePlayer${source.transceiver?.mid}`"
          :ref="`sidePlayer${source.transceiver?.mid}`"
          :class="!isGrid && isSplittedView ? 'hires-class': ''"
          autoplay
          muted
          playsinline
        ></video>
        <span 
          v-if="viewer.showLabels"
          :id="`sideLabel${source.transceiver?.mid}`"
          :ref="`sideLabel${source.transceiver?.mid}`"
        >
          {{source.sourceId}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import {
  selectSource,
  projectRemoteTracks,
  projectVideo,
  unprojectMultiview,
} from '../service/sdkManager'

export default {
  name: 'VideoPlayerSideVideoSources',
  data() {
    return {
      indexSourceProjectedInMain: null,
      indexMainMediaSource: 0,
      playerRef: null,
      enableClick: true
    }
  },
  computed: {
    ...mapState('Sources', [
      'sourceRemoteTracks',
      'videoSources',
      'transceiverSourceState',
    ]),
    ...mapState('Controls', {
        fullscreen: state => state.fullscreen, 
        isGrid: state => state.isGrid,
        isSplittedView: state => state.isSplittedView, 
        currentElementRef: state => state.currentElementRef,
    }),
    ...mapGetters('Sources', ['getVideoHasMain', 'getSelectedVideoSource']),
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
    ...mapState('Params', {
      viewer: (state) => state.viewer,
    }),
  },
  async mounted() {
    selectSource({ kind: 'video', source: this.videoSources[0] })
    this.setMainLabel(this.videoSources[0].name)
    this.sourceRemoteTracks.forEach(async (remoteTrack) =>
      await projectRemoteTracks(remoteTrack)
    )

    this.playerRef = document.getElementById('player')
  },
  async unmounted() {
    this.videoSources.forEach(source => {
      this.transceiverSourceState[source.mid] = source
    })
    unprojectMultiview()
  },
  watch: {
    'sourceRemoteTracks.length': {
      handler: async function (newLenght, currentLenght) {
        if (newLenght > currentLenght) {
          const lastIndex = newLenght - 1
          await projectRemoteTracks(this.sourceRemoteTracks[lastIndex])
        } else {
          this.sourceRemoteTracks.forEach(async (remoteTrack) =>
            await projectRemoteTracks(remoteTrack)
          )
        }
      },
    }
  },
  methods: {
    ...mapMutations('Controls', ['toggleFullscreen', 'setIsSplittedView']),
    ...mapMutations('Sources', ['setMainLabel','setPreviousMainLabel', 'updateTransceiverSourceState']),
    ...mapGetters('Layers', ['getActiveMedias','getActiveMainTransceiverMedias']),
    async switchProjection(videoMid) {
      await nextTick()
      this.enableClick = false
      this.playerRef = document.getElementById(this.currentElementRef)
      const sideLabelRef = this.$refs[`sideLabel${videoMid}`][0]

      // Select the source from the transceiver state and project it in the main video
      let source = this.transceiverSourceState[videoMid]
      let lowQualityLayer
      let midProjectedInMain = this.videoSources[0].mid

      if (this.getVideoHasMain) {
        sideLabelRef.textContent = this.transceiverSourceState[midProjectedInMain].name        

        const sourceIdProjectedInMain = this.transceiverSourceState[midProjectedInMain].sourceId
        midProjectedInMain = this.transceiverSourceState[midProjectedInMain].mid
        
        if (midProjectedInMain in this.getActiveMedias()) {
          lowQualityLayer = this.getActiveMedias()[midProjectedInMain].layers.slice(-1)[0]
        }
        projectVideo(
          sourceIdProjectedInMain, 
          videoMid, 
          this.transceiverSourceState[midProjectedInMain].trackId, 
          lowQualityLayer
        )
        this.updateTransceiverSourceState({ source })
      }

      this.setMainLabel(source.sourceId ?? source.name)
      await selectSource({ kind: 'video', source })

      if (this.isGrid) {
        this.setIsSplittedView(false)
      }

      this.enableClick = true
    },
  },
}
</script>

<style scoped>
video {
  height: 100%;
  width: 100%;
  align-self: center;
  cursor: pointer;
  border-radius: 0.25rem;
  object-fit: cover;
}

li {
  list-style-type: none;
  padding-left: 0.8rem;
}
.videoText span {
  bottom: 1rem;
  left: 1rem;
  position: absolute;
  color: #fff;
  background: rgba(0, 0, 0, 0.288);
  padding: 4px 8px;
  font-size: 0.875rem;
  line-height: 1.15rem;
  border-radius: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
  max-width: 6rem;
  overflow: hidden;
}

.videoText {
  height: 100%;
  width: 100%;
  position: relative;
}

.videoGrid {
  display: grid;
}
.grid-item {
  align-self: center;
}
.list-group-item {
  background-color: transparent;
  padding: 0%;
  text-align: center;
}

li {
  height: 9rem;
}

.list-side {
  margin: auto;
}

.list-item {
    line-height: 0;
    padding-bottom: 10px;
}

.list-item:last-child {
    padding-bottom: 0px;
}
</style>
