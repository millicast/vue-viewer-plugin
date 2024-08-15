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
      <div
        class="videoText"
        :id="`videoText${source.transceiver?.mid}`"
        :class="isGrid ? 'videoGrid' : '' "
        v-on:click="() => enableClick && switchProjection(source.transceiver?.mid)"
        @dblclick="toggleFullscreen"
      >
        <video
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
  unprojectMultiview,
} from '../service/sdkManager'
import { switchProject } from '../service/utils/sources'
import CustomToast from '../service/utils/toast'
import { switchSourcesGrid } from '../service/utils/sources'

export default {
  name: 'VideoPlayerSideVideoSources',
  data() {
    return {
      indexSourceProjectedInMain: null,
      indexMainMediaSource: 0,
      playerRef: null,
      enableClick: true,
      toast: new CustomToast(),
      fullScreen: false,
    }
  },
  computed: {
    ...mapState('Sources', [
      'sourceRemoteTracks',
      'sourceSideTracks',
      'videoSources',
      'audioSources',
      'transceiverSourceState',
      'audioFollowsVideo',
      'animate',
      'trackMId',
      'selectedVideoSource',
    ]),
    ...mapState('Controls', {
        fullscreen: state => state.fullscreen, 
        isGrid: state => state.isGrid,
        isSplittedView: state => state.isSplittedView, 
        currentElementRef: state => state.currentElementRef,
    }),
    ...mapState('Layers', {
      selectedQuality: (state) => state.selectedQuality,
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
    this.sourceRemoteTracks.forEach(async (remoteTrack) => {
      await projectRemoteTracks({remoteTrack})
      const mid = remoteTrack.transceiver.mid
      this.setTrackMId({key: mid, value: mid})
    }
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
          await projectRemoteTracks({ remoteTrack: this.sourceRemoteTracks[lastIndex] })
          const mid = this.sourceRemoteTracks[lastIndex].transceiver.mid
          this.setTrackMId({key: mid, value: mid})
        } else {
          const mainMid = this.selectedVideoSource.mid
          this.resetTrackMId(mainMid)
          this.sourceSideTracks.forEach(async (remoteTrack, index) => {
            await projectRemoteTracks({remoteTrack, index})
          }
          )
        }
      },
    }
  },
  methods: {
    ...mapMutations('Controls', ['toggleFullscreen', 'setIsSplittedView']),
    ...mapMutations('Sources', ['setMainLabel','setPreviousMainLabel', 'replaceSourceRemoteTrack','setTrackMId','resetTrackMId']),//, 'updateTransceiverSourceState']),
    ...mapMutations('Layers', ['setMainTransceiverMedias']),
    ...mapGetters('Layers', ['getActiveMedias','getActiveMainTransceiverMedias']),
    async switchProjection(projectedVideoMid = 0) {
      await nextTick()
      const videoMid = this.trackMId[projectedVideoMid]
      const source = this.transceiverSourceState[videoMid]
      source.mid = source?.mid || 0
      if( this.isGrid ) {
        switchSourcesGrid(source)
      } else {
        this.enableClick = false
        this.playerRef = document.getElementById(this.currentElementRef)
        switchProject(source)
        this.enableClick = true
      }
      const audioSource = this.audioSources.find(currentSoruce => currentSoruce.name === source.name)
      if ( audioSource && this.audioFollowsVideo ) {
        try {
          await selectSource({ kind: 'audio', source: audioSource })
        } catch (error) {
          this.toast.showToast('error', 'There was an error selecting the desired source, try again', { timeout: 5000 })
        }
      }
    }
  },
}
</script>

<style>

.hide-video {
  display: none !important;
}

@media (max-width: 430px) {
  video.animateVideo {
    transition: all 0.4s ease-in;
    padding: 25%;
    transform: translateY(100%);
  }

  video.sideAnimateVideo {
    transition: all 0.4s ease-in;
    transform: translateY(-100%);
  }
}

@media (min-width: 430px) {
  video.animateVideo {
    transition: all 0.4s ease-in;
    width: 40%;
    margin-left: 60%;
  }

  video.sideAnimateVideo {
    transition: all 0.4s ease-in;
    transform: translateX(-100%);
    height: 200% !important;
    width: 200% !important;
  }
}

.video-full-screen {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

</style>

<style scoped>
video {
  height: 100%;
  max-height: 100vh;
  width: 100%;
  align-self: center;
  border-radius: 0.25rem;
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
  cursor: pointer;
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
  width: 100%;
}

.list-item {
    line-height: 0;
    padding-bottom: 10px;
}

.list-item:last-child {
    padding-bottom: 0px;
}
</style>
