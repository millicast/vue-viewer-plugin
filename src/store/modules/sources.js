const defaulState = {
    videoSources: [],
    audioSources: [],
    selectedVideoSource: {
        name: 'none',
    },
    selectedAudioSource: {
        name: 'none',
    },
    isAudioOnly: false,
    stream: null,
}

export default {
    namespaced: true,
    state: defaulState,
    mutations: {
        setSelectedSource(state, { kind, selectedSource }) {
            if (kind === 'video') {
                state.selectedVideoSource = selectedSource
            } else if (kind === 'audio') {
                state.selectedAudioSource = selectedSource
            }
        },
        setSources(state, { kind, sources }) {
            if (kind === 'video') {
                state.videoSources = sources
            } else if (kind === 'audio') {
                state.audioSources = sources
            }
        },
        setStream(state, stream) {
            state.stream = stream
        },
        setIsAudioOnly(state, isAudioOnly) {
            state.isAudioOnly = isAudioOnly
        },
    },
    getters: {
        getVideoSources(state) {
            return state.videoSources
        },
        getAudioSources(state) {
            return state.audioSources
        },
        getVideoHasMain(state) {
            return (
                state.videoSources.findIndex(
                    (source) => source.sourceId === null
                ) !== -1
            )
        },
        getAudioHasMain(state) {
            return (
                state.audioSources.findIndex(
                    (source) => source.sourceId === null
                ) !== -1
            )
        },
    },
}
