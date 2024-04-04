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
        :class="isGrid ? 'videoGrid' : '' "
        v-on:click="() => enableClick && switchProjection(source.transceiver?.mid)"
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
  projectVideo,
  unprojectMultiview,
} from '../service/sdkManager'
import CustomToast from '../service/utils/toast'

export default {
  name: 'VideoPlayerSideVideoSources',
  data() {
    return {
      indexSourceProjectedInMain: null,
      indexMainMediaSource: 0,
      playerRef: null,
      enableClick: true,
      toast: new CustomToast(),
      proyectedMain: {},
      trackMId: {0 : 0},
    }
  },
  computed: {
    ...mapState('Sources', [
      'sourceRemoteTracks',
      'videoSources',
      'audioSources',
      'transceiverSourceState',
      'audioFollowsVideo',
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
    this.sourceRemoteTracks.forEach(async (remoteTrack) => {
      await projectRemoteTracks(remoteTrack)
      const mid = remoteTrack.transceiver.mid
      this.trackMId[mid] = mid
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
          await projectRemoteTracks(this.sourceRemoteTracks[lastIndex])
          const mid = this.sourceRemoteTracks[lastIndex].transceiver.mid
          this.trackMId[mid] = mid
        } else {
          this.sourceRemoteTracks.forEach(async (remoteTrack) => {
            await projectRemoteTracks(remoteTrack)
            console.log('remove',remoteTrack)
          }
          )
        }
      },
    }
  },
  methods: {
    ...mapMutations('Controls', ['toggleFullscreen', 'setIsSplittedView']),
    ...mapMutations('Sources', ['setMainLabel','setPreviousMainLabel', 'replaceSourceRemoteTrack']),//, 'updateTransceiverSourceState']),
    ...mapGetters('Layers', ['getActiveMedias','getActiveMainTransceiverMedias']),
    async switchProjection(proyectedVideoMid) {
      const videoMid = this.trackMId[proyectedVideoMid]
      await nextTick()
      this.enableClick = false
      this.playerRef = document.getElementById(this.currentElementRef)
      // Select the source from the transceiver state and project it in the main video
      let source = this.transceiverSourceState[videoMid]
      let lowQualityLayer
      let midProjectedInMain = this.proyectedMain?.mid || this.videoSources[0].mid
      const sourceName =  source.name
      const audioSource = this.audioSources.find(currentSoruce => currentSoruce.name === sourceName)
      if (this.getVideoHasMain) {
        if (this.viewer.showLabels) {
          this.$refs[`sideLabel${proyectedVideoMid}`][0].textContent = this.transceiverSourceState[midProjectedInMain].name        
        }
        const sourceIdProjectedInMain = this.transceiverSourceState[midProjectedInMain].sourceId
        midProjectedInMain = this.transceiverSourceState[midProjectedInMain].mid

        if (midProjectedInMain in this.getActiveMedias()) {
          lowQualityLayer = this.getActiveMedias()[midProjectedInMain].layers.slice(-1)[0]
        }
        const layers = {
          encodingId: lowQualityLayer.encodingId,
          spatialLayerId: lowQualityLayer.spatialLayerId,
          temporalLayerId: lowQualityLayer.temporalLayerId
        }
        projectVideo(
          source.sourceId, 
          videoMid,
          this.transceiverSourceState[midProjectedInMain].trackId, 
          undefined,
          true,
        )
        projectVideo(
          sourceIdProjectedInMain, 
          midProjectedInMain, 
          this.transceiverSourceState[midProjectedInMain].trackId, 
          layers,
          false,
        )
        await this.swapVideos(`sidePlayer${proyectedVideoMid}`)
        // this.updateTransceiverSourceState({ source })
      }
      this.setMainLabel(source.sourceId ?? source.name)
      // await selectSource({ kind: 'video', source })
      this.proyectedMain = source

      if (this.isGrid) {
        this.setIsSplittedView(false)
      }

      if ( audioSource && this.audioFollowsVideo ) {
        try {
          await selectSource({ kind: 'audio', source: audioSource })
        } catch (error) {
          this.toast.showToast('error', 'There was an error selecting the desired source, try again', { timeout: 5000 })
        }
      }
      this.trackMId[0] = videoMid
      this.trackMId[proyectedVideoMid] = midProjectedInMain
      this.enableClick = true
    },
    async swapVideos(id) {
      return new Promise((resolve) => {
        const playerVideo = document.getElementById(this.currentElementRef);
        const sideVideo = document.getElementById(id);
        const elements = document.querySelectorAll('.overflow-auto');
        elements.forEach(element => {
          element.classList.remove('overflow-auto');
        });
        const sideParent = sideVideo.parentElement;
        playerVideo.classList.add('animateVideo');
        sideVideo.classList.add('sideAnimateVideo');
        setTimeout(() => {
          sideParent.insertBefore(playerVideo, sideVideo.nextSibling);
          const playerParent  = document.getElementById('main-source');
          const spanElement = playerParent.querySelector('span')
          playerParent.insertBefore(sideVideo, spanElement);
          playerVideo.classList.remove('animateVideo');
          sideVideo.classList.remove('sideAnimateVideo');
          playerVideo.id = playerVideo.ref = id
          sideVideo.id = sideVideo.ref = this.currentElementRef
          elements.forEach(element => {
            element.classList.add('overflow-auto');
          });
          resolve();
        }, 400);
      });
    }
  },
}
</script>

<style>

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

</style>

<style scoped>
video {
  height: 100%;
  width: 100%;
  align-self: center;
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
