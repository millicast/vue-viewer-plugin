<template>
    <a class="dropdown-item" @click="changeView()">
        <i :class="isGrid? 'bi ml-viewer-bi-grid':'bi ml-viewer-bi-grid-1x2'" class="align-middle control-icon"></i>
            Change layout
    </a>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { projectVideo } from '../../service/sdkManager'

export default {
    name: "VideoPlayerControlsSettingsLayout",
    computed: {
        ...mapState("Controls", ["isGrid"]),
        ...mapState("Sources",['transceiverSourceState','trackMId'])
    },
    methods: {
        ...mapMutations("Controls", ["setIsGrid"]),
        changeView () {
            const layers = this.isGrid ? { maxHeight: 100 } : undefined
            for (var key in this.trackMId) {
                if (key > 0) {
                    const source = this.transceiverSourceState[this.trackMId[key]]
                    projectVideo(
                        source.sourceId, 
                        source.mid,
                        source.trackId, 
                        layers,
                        this.isGrid,
                    )
                }
            }
            this.setIsGrid(!this.isGrid)
        }
    },
};
</script>