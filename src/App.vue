<template>
  <div id="viewer-container">
    <VideoPlayerContainer class="ml-viewer" />
  </div>
</template>

<script>
import VideoPlayerContainer from './components/VideoPlayerContainer.vue'
import { useToast } from 'vue-toastification'
import setUserParams from './service/userParams'
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
        setUserParams({
          streamId:
            this.paramsOptions?.accountId +
            '/' +
            this.paramsOptions?.streamName,
          audioOnly: this.paramsOptions?.audioOnly ?? false,
          token: this.paramsOptions?.token,
          image: this.paramsOptions?.image,
          directorUrl:
            process.env.NODE_ENV !== 'production'
              ? this.paramsOptions?.directorUrl
              : null,
          hideButtons: this.paramsOptions.hideButtons ?? [],
        })
      }
    },
  },
  async mounted() {
    const myContainer = document.getElementById('viewer-container')
    const toast = await useToast()
    toast.updateDefaults({
      container: myContainer,
      containerClassName: 'toast-custom',
    })
    this.updateParams()

    ElementQueries.listen()
    ElementQueries.init()
    window.addEventListener('load', () => {
      new ResizeSensor(myContainer, () => {
        this.setMobile(myContainer.clientWidth <= 575)
      })
    })
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
  display: inline-block;
  background-color: #000;
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}

#viewer-container[min-width~='576px'] :deep(.mv-col-12) {
  -webkit-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

#viewer-container[min-width~='576px'] :deep(.mv-col-9) {
  -webkit-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

#viewer-container[max-width~='575px'] :deep(.mv-col-6) {
  -webkit-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

#viewer-container[min-width~='576px'] :deep(.mv-col-3) {
  -webkit-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

#viewer-container[min-width~='576px'] :deep(.side-panel) {
  height: 100%;
}

#viewer-container[max-width~='575px'] :deep(.side-panel) {
  height: 35%;
}

#viewer-container[max-width~='575px'] :deep(.limit-screen) {
  height: 65%;
}

#viewer-container[min-width~='992px'] :deep(.side-source) {
  height: 10rem;
}

#viewer-container[max-width~='991.98px'] :deep(.side-source) {
  height: 7rem;
}

#viewer-container[max-width~='575px'] :deep(.dropdown-menu) {
  width: 15rem;
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
</style>
