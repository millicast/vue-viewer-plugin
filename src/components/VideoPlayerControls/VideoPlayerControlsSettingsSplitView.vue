<template>
  <a class="dropdown-item" @click="setIsSplittedView(!isSplittedView)">
    <i class="bi-layout-sidebar-inset-reverse align-middle control-icon"></i>
    {{ isSplittedView ? "Hide" : "Show" }} Multi View
  </a>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "VideoPlayerControlsSettingsSplitView",
  computed: {
    ...mapState("Controls", ["isSplittedView"]),
  },
  methods: {
    ...mapMutations("Controls", ["setIsSplittedView"]),
  },
};
</script>
