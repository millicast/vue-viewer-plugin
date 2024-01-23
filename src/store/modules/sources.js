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
  audioFollowsVideo: false,
  stream: null,
  sourceRemoteTracks: [],
  mainLabel: 'Main',
  transceiverSourceState: {},
  trackIdMidMap: {}
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
    removeSource(state, {kind, sourceId}) {
      if (kind === 'video') {
        const sourceIndex = state.videoSources.findIndex(source => source.sourceId === sourceId)
        if (sourceIndex !== -1) {
          state.videoSources.splice(sourceIndex, 1)
        }
      } else if (kind === 'audio') { 
        const sourceIndex = state.audioSources.findIndex(source => source.sourceId === sourceId)
        if (sourceIndex !== -1) {
          state.audioSources.splice(sourceIndex, 1)
        }
      }
    }, 
    setStream(state, stream) {
      state.stream = stream
    },
    setIsAudioOnly(state, isAudioOnly) {
      state.isAudioOnly = isAudioOnly
    },
    setAudioFollowsVideo(state, audioFollowsVideo) {
      state.audioFollowsVideo = audioFollowsVideo
    },
    addTrackIdMidMapping(state, trackIdMidMapping) {
      state.trackIdMidMap[trackIdMidMapping.mid] = trackIdMidMapping.trackId
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
      const remoteToDeleteIndex = state.sourceRemoteTracks.findIndex(
        (remoteTrack) => remoteTrack.sourceId === sourceId
      )
      if (remoteToDeleteIndex !== -1) {
        state.sourceRemoteTracks.splice(remoteToDeleteIndex, 1)
      }
    },
    removeTransceiverSourceState(state, sourceId) {
      const sourceCurrentMid = Object.keys(state.transceiverSourceState).find(key => state.transceiverSourceState[key].sourceId === sourceId)
      const mainMidKey = Object.keys(state.transceiverSourceState).find(key => state.transceiverSourceState[key].sourceId === null)
      if (sourceCurrentMid !== -1 && sourceId !== null) {
        let sourceInitialMid = Object.values(state.sourceRemoteTracks).find(value => value.sourceId === sourceId).transceiver.mid
        if (state.transceiverSourceState[sourceCurrentMid].mid  === '0') {
          if(sourceInitialMid !== mainMidKey) {
            let sourceAtInitialMid = state.transceiverSourceState[sourceInitialMid]
            state.transceiverSourceState[sourceCurrentMid] = { ...state.transceiverSourceState[mainMidKey] , mid: sourceCurrentMid }
            state.transceiverSourceState[mainMidKey] = { ...sourceAtInitialMid, mid: mainMidKey }
            delete state.transceiverSourceState[sourceInitialMid]
          } else {
            sourceInitialMid = state.videoSources.find(source => source.sourceId === sourceId).mid
            delete state.transceiverSourceState[sourceInitialMid]
            state.transceiverSourceState[sourceCurrentMid] = state.videoSources[sourceCurrentMid]
          }
        } else {
          state.transceiverSourceState[sourceCurrentMid] = { ...state.transceiverSourceState[sourceInitialMid] , mid: `${sourceCurrentMid}` }
          delete state.transceiverSourceState[sourceInitialMid]
        }
      } else if (sourceCurrentMid !== -1) {
        if (state.transceiverSourceState[sourceCurrentMid].mid !== '0') {
          state.transceiverSourceState[sourceCurrentMid] = { ...state.transceiverSourceState[0] , mid: `${sourceCurrentMid}` }
          delete state.transceiverSourceState[0]
        }
      }
    },
    removeTrackIdMidMapping(state, mid) {
      delete state.trackIdMidMap[mid]
    },
    setMainLabel(state, label) {
      state.mainLabel = label
    },
    updateTransceiverSourceState(state, { source }) {
      const currentSource = state.transceiverSourceState[state.videoSources[0].mid]
      const targetKey = Object.keys(state.transceiverSourceState)
        .find(
          key => state.transceiverSourceState[key].mid === source.mid
        )
      const targetSource = state.transceiverSourceState[targetKey]
      state.transceiverSourceState[state.videoSources[0].mid] = { ...targetSource, mid: state.videoSources[0].mid }
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
    getTransceiverSourceState(state) {
      return state.transceiverSourceState
    },
    getTrackIdMidMap(state) {
      return state.trackIdMidMap
    }
  },
}