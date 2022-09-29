<template>
  <div id="viewer-container">
    <VideoPlayerContainer class="ml-viewer" />
  </div>
</template>

<script>
import VideoPlayerContainer from './components/VideoPlayerContainer.vue'
import { useToast } from "vue-toastification"
import setUserParams from './service/userParams'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-toastification/dist/index.css';

export default {
  name: 'App',
  components: {
    VideoPlayerContainer
  },
  props: {
    paramsOptions: Object
  },
  methods: {
    updateParams() {
      if (this.paramsOptions) {
        setUserParams({
          streamId: this.paramsOptions?.accountId +'/'+ this.paramsOptions?.streamName,
          audioOnly: this.paramsOptions?.audioOnly ?? false,
          token: this.paramsOptions?.token,
          image: this.paramsOptions?.image,
          directorUrl: process.env.NODE_ENV !== 'production' ? this.paramsOptions?.directorUrl: null,
          hideButtons: this.paramsOptions.hideButtons ?? []
        })
      }
    }
  },
  async mounted(){
    const myContainer = document.querySelector('#vplayer')
    const toast = await useToast()
    toast.updateDefaults({ container: myContainer })
    this.updateParams()
  },
  watch: {
    paramsOptions() {
      this.updateParams()
    }
  }
}

</script>

<style scoped>
#viewer-container {
  display: inline-block;
  background-color: #000;
  color: white;
  min-width: 300px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.Vue-Toastification__container {
  padding: 0 !important;
}

:-webkit-full-screen {
	position: fixed;
	width: 100%;
	top: 0;
	background: none;
}

</style>
