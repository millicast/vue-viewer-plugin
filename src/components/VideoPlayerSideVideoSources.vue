<template>
  <ul class="row my-1 mx-0 p-0" style="width: 100%">
    <li
      class="mv-col-6 mv-col-12 mb-1 side-source"
      :style="'scroll-snap-align: end'"
      v-for="(source, index) in sourceRemoteTracks"
      :key="'p' + index"
    >
      <div class="videoText" :style="'height:100%'">
        <video
          v-on:click="switchProjection(index)"
          :id="'sidePlayer' + source.sourceId"
          :ref="'sidePlayer' + source.sourceId"
        ></video>
        <span :id="'sideLabel' + source.transceiver?.mid">{{
          source.sourceId
        }}</span>
      </div>
    </li>
  </ul>
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
    ...mapGetters('Sources', ['getVideoHasMain']),
    ...mapState('ViewConnection', {
      millicastView: (state) => state.millicastView,
    }),
  },
  async mounted() {
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
    ...mapMutations('Sources', ['setMainLabel']),
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
    },
  },
}
</script>

<style scoped>
video {
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 0.25rem;
  object-fit: cover;
}

li {
  list-style-type: none;
  padding-left: 0.8rem;
}
.videoText span {
  bottom: 8%;
  left: 5%;
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

.list-group-item {
  background-color: transparent;
  padding: 0%;
  text-align: center;
}

li {
  height: 9rem;
}
</style>
