<template>
    <span class="d-inline">
        <i
            class="h3 align-middle control-icon"
            :class="volumeIcon"
            @click="toggleMuted"
            @mousemove="toggleVolumeSlider"
        ></i>
        <input
            type="range"
            class="align-middle mr-2 slider"
            :class="{ show: showVolume, volumeMobile: true }"
            id="volumeSlider"
            min="0"
            max="1"
            step=".01"
            v-model="volume"
            @mousemove="toggleVolumeSlider"
        />
    </span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'VideoPlayerControlsVolume',
    data() {
        return {
            volume: 1,
            showVolume: false,
        }
    },
    watch: {
        volume: function (newVolume) {
            if (this.volume === 0 && !this.muted) {
                this.toggleMuted()
            } else if (this.muted) {
                this.toggleMuted()
            }
            this.setVideoVolume(newVolume)
        },
    },
    computed: {
        ...mapState('Controls', {
            muted: (state) => state.muted,
        }),
        volumeIcon: function () {
            if (this.muted || this.volume === 0) {
                return 'ml-viewer-bi-volume-mute-fill'
            } else if (this.volume < 0.1) {
                return 'ml-viewer-bi-volume-off-fill'
            } else if (this.volume < 0.5) {
                return 'ml-viewer-bi-volume-down-fill'
            } else {
                return 'ml-viewer-bi-volume-up-fill'
            }
        },
    },
    methods: {
        ...mapMutations('Controls', ['setVideoMuted', 'setVideoVolume']),
        toggleVolumeSlider() {
            if (this.showVolumeTimeout) {
                clearTimeout(this.showVolumeTimeout)
            }
            this.showVolume = true
            this.showVolumeTimeout = setTimeout(() => {
                this.showVolume = false
            }, 4000)
        },
        toggleMuted() {
            this.setVideoMuted(!this.muted)
        },
    },
}
</script>

<style scoped lang="scss">
@use '../../styles/_inputrange.scss'
    with(
        $track-color: white,
        $ie-bottom-track-color: white,
        $track-width: 100%,
        $track-height: 0.2rem,
        $track-radius: 0.2rem,
        $track-border-width: 0rem,

        $thumb-color: white,
        $thumb-height: 0.8rem,
        $thumb-width: 0.8rem,
        $thumb-radius: 0.8rem
    );

#volumeSlider {
    width: 0%;
    overflow: hidden;
    transition: width 0.5s ease-in-out;

    &.show {
        width: 4rem;
        display: inline-block;
    }
}
</style>
