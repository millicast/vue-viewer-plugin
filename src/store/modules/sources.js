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
  transceiverSourceState: {},
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
        const source = sources[0]
        if (source?.mid === '0') {
          state.transceiverSourceState[source.mid] = source
        }
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
        const  midTrack = sourceRemoteTrack.transceiver.mid
        state.videoSources[sid].mid = midTrack
        state.transceiverSourceState[midTrack] = state.videoSources[sid]
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
        state.transceiverSourceState[sourceRemoteTrack.transceiver.mid] = state.videoSources[sid]
      }
    },
    removeSourceRemoteTrack(state, sourceId) {
      let remoteToDeleteIndex = state.sourceRemoteTracks.findIndex(
        (remoteTrack) => remoteTrack.sourceId === sourceId
      )
      if (remoteToDeleteIndex !== -1) {
        delete state.transceiverSourceState[
          state.sourceRemoteTracks.find(
            remoteTrack => remoteTrack.sourceId === sourceId
          ).transceiver?.mid
        ]
        state.sourceRemoteTracks.splice(remoteToDeleteIndex, 1)
      }
    },
    setMainLabel(state, label) {
      state.mainLabel = label
    },
    updateTransceiverSourceState(state, { source }) {
      const currentSource = state.transceiverSourceState[0]
      const targetKey = Object.keys(state.transceiverSourceState)
        .find(
          key => state.transceiverSourceState[key].mid === source.mid
        )
      const targetSource = state.transceiverSourceState[targetKey]
      state.transceiverSourceState[0] = {...targetSource, mid: 0 }
      state.transceiverSourceState[targetKey] = { ...currentSource, mid: targetKey }
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
    getSelectedVideoSource(state) {
      return state.selectedVideoSource
    },
  },
}