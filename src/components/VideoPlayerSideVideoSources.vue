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
          v-on:click="switchProjection(index)"
          :id="'sidePlayer' + source.sourceId"
          :ref="'sidePlayer' + source.sourceId"
          :class="!isGrid && isSplittedView ? 'hires-class': ''"
          autoplay
          muted
          playsinline
        ></video>
        <span 
          v-if="queryParams.showLabels"
          :id="'sideLabel' + source.transceiver?.mid"
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
} from '../service/sdkManager'

export default {
  name: 'VideoPlayerSideVideoSources',
  data() {
    return {
      indexSourceProjectedInMain: null,
      indexMainMediaSource: 0,
    }
  },
  computed: {
    ...mapState('Sources', ['sourceRemoteTracks', 'videoSources']),
    ...mapState("Controls", {
        fullscreen: state => state.fullscreen,
        isGrid: state => state.isGrid,
        isSplittedView: state => state.isSplittedView
    }),
    ...mapGetters('Sources', ['getVideoHasMain']),
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
    ...mapState('Params', {
      queryParams: (state) => state.queryParams,
    }),
  },
  async mounted() {
    selectSource({kind: 'video',source: this.videoSources[0]})
    this.setMainLabel('Main')
    this.sourceRemoteTracks.forEach(
      async (_, index) => await projectRemoteTracks(index)
    )
  },
  watch: {
    'sourceRemoteTracks.length': async function () {
      await projectRemoteTracks(this.sourceRemoteTracks.length - 1)
    },
  },
  methods: {
    ...mapMutations("Controls", ["toggleFullscreen", "setIsSplittedView"]),
    ...mapMutations('Sources', ['setMainLabel','setPreviousMainLabel']),
    async switchProjection(index) {
      await nextTick()

      // select the source in the dropdown
      const vidId =
        index + this.videoSources.length - this.sourceRemoteTracks.length
      let source = this.videoSources[vidId]

      if (this.getVideoHasMain) {
        if (this.indexSourceProjectedInMain === null) {
          // the one projected is the main and want to project a small one
          projectVideo(
            null,
            this.sourceRemoteTracks[index].transceiver?.mid,
            vidId
          )
          this.indexSourceProjectedInMain = index
        } else if (this.indexSourceProjectedInMain === index) {
          // is being projected a small video and want to switch to main with this one
          projectVideo(
            this.sourceRemoteTracks[index].sourceId,
            this.sourceRemoteTracks[index].transceiver?.mid,
            vidId
          )
          this.indexSourceProjectedInMain = null
          source = this.videoSources[this.indexMainMediaSource]
        } else {
          // is being projected a small video but want to project another small one
          projectVideo(
            null,
            this.sourceRemoteTracks[index].transceiver?.mid,
            vidId
          )
          projectVideo(
            this.sourceRemoteTracks[this.indexSourceProjectedInMain].sourceId,
            this.sourceRemoteTracks[this.indexSourceProjectedInMain].transceiver
              ?.mid,
            vidId
          )
          this.indexSourceProjectedInMain = index
        }
      }

      this.setMainLabel(source.sourceId ?? 'Main')
      await selectSource({ kind: source.trackId, source })
      if (this.isGrid) {
        this.setIsSplittedView(false)
      }
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
