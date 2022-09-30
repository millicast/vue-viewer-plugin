<template>
    <a
        class="dropdown-item d-flex align-items-center pr-0 justify-content-between"
        @click="setDropup('qualities')"
    >
        <span class="back-header mr-2">
            <i class="bi ml-viewer-bi-sliders"></i>
            Video Quality:
        </span>
        <div class="dropdown-item-name mr-auto">
            {{ this.selectedQuality.name }}
        </div>
        <div>
            <i class="bi ml-viewer-bi-chevron-right ml-auto py-0"></i>
        </div>
    </a>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'VideoPlayerControlsSettingsQuality',
    computed: {
        ...mapState('Layers', {
            selectedQuality: (state) => state.selectedQuality,
        }),
    },
    methods: {
        ...mapMutations('Controls', ['setDropup']),
    },
}
</script>
