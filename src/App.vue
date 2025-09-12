<template>
  <VideoPlayerContainer class="ml-viewer" id="viewer-container" />
</template>

<script>
import VideoPlayerContainer from './components/VideoPlayerContainer.vue'
import CustomToast from './service/utils/toast'
import processViewerOptions from './service/viewerOptions'
import { availableControls } from './service/viewerOptions'
import processEnvironmentOptions from './service/environmentOptions'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-toastification/dist/index.css'
import { ElementQueries, ResizeSensor } from 'css-element-queries'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    VideoPlayerContainer,
  },
  props: {
    paramsOptions: Object,
  },
  methods: {
    ...mapMutations('Controls', ['setMobile']),
    updateParams() {
      if (this.paramsOptions) {
        const {
          accountId,
          streamName,
          audioOnly,
          videoOnly,
          token,
          image,
          directorUrl,
          controls,
          hideButtons,
          autoplay,
          muted,
          noDelay,
          multisource,
          drm,
          audioFollowsVideo,
          layout,
          showLabels,
          startingQuality,
          hideToast,
          mainLabel,
          forcePlayoutDelayMin,
          forcePlayoutDelayMax,
          metadata,
          mediaBufferMs,
          showTimer,
          abrStrategy,
          abrBandwidth,
          customKeys
        } = this.paramsOptions
        const shouldHideButtons = controls === false ? availableControls : hideButtons ?? [];

        processViewerOptions({
          streamId: `${accountId}/${streamName}`,
          audioOnly: audioOnly ?? false,
          videoOnly: videoOnly ?? false,
          token: token,
          image: image,
          directorUrl: directorUrl,
          hideButtons: shouldHideButtons,
          autoplay: autoplay ?? true,
          muted: muted ?? false,
          noDelay: noDelay ?? false,
          multisource: multisource ?? false,
          audioFollowsVideo: audioFollowsVideo ?? false,
          layout: layout ?? null,
          showLabels: showLabels ?? true,
          startingQuality: startingQuality,
          hideToast: hideToast,
          mainLabel: mainLabel ?? 'Main',
          drm: drm ?? false,
          forcePlayoutDelayMin: forcePlayoutDelayMin,
          forcePlayoutDelayMax: forcePlayoutDelayMax,
          metadata: metadata,
          mediaBufferMs: mediaBufferMs,
          showTimer: showTimer,
          abrStrategy: abrStrategy,
          abrBandwidth: abrBandwidth,
          customKeys,
        })
      }
      processEnvironmentOptions(this.paramsOptions?.environment)
    },
  },
  async mounted() {
    const myContainer = document.getElementById('viewer-container')
    const toast = await new CustomToast()
    toast.updateDefaults({
      container: myContainer,
      containerClassName: 'toast-custom',
    })
    this.updateParams()

    // Starting quality toast
    if (this.paramsOptions?.startingQuality) {
      toast.showToast('info', 'Fetching starting quality layer', {
        timeout: 1500,
      })
    }

    ElementQueries.listen()
    ElementQueries.init()
    window.addEventListener('load', () => {
      new ResizeSensor(myContainer, () => {
        this.setMobile(myContainer.clientWidth <= 575)
      })
    })

    // API for Chromecast
    const plugin = document.createElement('script')
    plugin.setAttribute(
      'src',
      '//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1'
    )
    plugin.async = true
    document.head.appendChild(plugin)
  },
  watch: {
    paramsOptions() {
      this.updateParams()
    },
  },
}
</script>

<style scoped>
#viewer-container {
  background-color: #000;
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0;
  overflow: hidden;
}

#viewer-container[min-width~='430px'] :deep(.side-panel) {
  height: 100%;
  display: flex;
}

#viewer-container[max-width~='429px'] :deep(.dropdown-menu) {
  width: 15rem;
}

#viewer-container[max-width~='429.9px'] {
  position: relative;
  align-self: center;
  height: 100%;
  display: flex;
}

#viewer-container[max-width~='429.9px'] :deep(.list-side) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

#viewer-container[max-width~='429.9px'] :deep(.list-item) {
  padding: 0;
  max-width: 100%;
}

#viewer-container[min-width~='721'][max-width~='1920'] :deep(.grid-container) {
  max-width: 85%;
}

#viewer-container[min-width~='429.98px'][max-width~='721px']
  :deep(.grid-container) {
  padding: 0 40px;
  display: -webkit-inline-box;
}

.Vue-Toastification__container {
  padding: 0 !important;
}

:deep(.Vue-Toastification__container.top-center.toast-custom) {
  position: absolute !important;
}

:-webkit-full-screen {
  position: fixed;
  width: 100%;
  top: 0;
  background: none;
}

#viewer-container {
  position: relative;
  transform: translate(0);
}
</style>
