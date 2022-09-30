<template>
    <h4 v-if="!isLoading" class="align-middle">
        <span
            class="badge badge-secondary"
            :class="{ 'badge-danger': isLive }"
            v-text="text"
            style="border: 0px"
        ></span>
    </h4>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'VideoPlayerControlsBadge',
    computed: {
        ...mapState('Controls', {
            isLive: (state) => state.isLive,
            isLoading: (state) => state.isLoading,
        }),
        text: function () {
            return this.isLive ? 'LIVE' : 'NOT LIVE'
        },
    },
}
</script>
