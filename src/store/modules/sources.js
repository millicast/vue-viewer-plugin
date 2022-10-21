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
  sourceRemoteTracks: [],
  mainLabel: 'Main',
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
    addSourceRemoteTrack(state, sourceRemoteTrack) {
      state.sourceRemoteTracks.push(sourceRemoteTrack)
      //I know that is video source because we don't implement multi audio
      const sid = state.videoSources.findIndex(
        (v) => v.sourceId === sourceRemoteTrack.sourceId
      )
      if (sid !== -1) {
        state.videoSources[sid].mid = sourceRemoteTrack.transceiver.mid
      }
    },
    replaceSourceRemoteTrack(state, { sourceRemoteTrack, remoteTrackIndex }) {
      state.sourceRemoteTracks[remoteTrackIndex] = sourceRemoteTrack
      //I know that is video source because we don't implement multi audio
      const sid = state.videoSources.findIndex(
        (v) => v.sourceId === sourceRemoteTrack.sourceId
      )
      if (sid !== -1) {
        state.videoSources[sid].mid = sourceRemoteTrack.transceiver.mid
      }
    },
    removeSourceRemoteTrack(state, sourceId) {
      let remoteToDeleteIndex = state.sourceRemoteTracks.findIndex(
        (remoteTrack) => remoteTrack.sourceId === sourceId
      )
      if (remoteToDeleteIndex !== -1) {
        state.sourceRemoteTracks.splice(remoteToDeleteIndex, 1)
      }
    },
    setMainLabel(state, label) {
      state.mainLabel = label
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
        state.videoSources.findIndex((source) => source.sourceId === null) !==
        -1
      )
    },
    getAudioHasMain(state) {
      return (
        state.audioSources.findIndex((source) => source.sourceId === null) !==
        -1
      )
    },
  },
}
