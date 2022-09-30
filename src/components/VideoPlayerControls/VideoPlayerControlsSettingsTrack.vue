<template>
    <a class="dropdown-item" @click="setDropup('tracks')">
        <span class="text-right back-header">
            <i class="bi ml-viewer-bi-camera-video-fill"></i>
            Video source:
            {{ this.selectedSource.name }}
            <i class="bi ml-viewer-bi-chevron-right"></i>
        </span>
    </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'VideoPlayerControlsSettingsQuality',
    computed: {
        ...mapState('Sources', {
            selectedSource: (state) => state.selectedSource,
        }),
    },
    methods: {
        ...mapMutations('Controls', ['setDropup']),
    },
}
</script>
