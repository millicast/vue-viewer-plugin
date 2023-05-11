<template>
  <vue-resizable class="resizable">
    <VideoPlayer
      :paramsOptions="{
        accountId: '',
        streamName: '',
        autoplay: false,
        hideButtons: [],
      }"
    />
  </vue-resizable>
</template>

<script>
import VueResizable from "vue-resizable";
export default {
  name: "App",
  components: {
    VueResizable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
