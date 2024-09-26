const defaulState = {
  video: null,
  playing: false,
  muted: false,
  player: null,
  srcObject: null,
  pip: null,
  autoPlayMuted: false,
  volume: '1',
  isMobile: false,
  dropup: '',
  fullscreen: false,
  isLive: false,
  isLoading: true,
  trackWarning: false,
  castOptions: {},
  castAvailable: false,
  airPlayAvailable: false,
  castIsConnected: false,
  castDevice: {},
  viewerCount: null,
  reconnection: { status: false, error: null, timeout: null },
  currentElementRef: 'player',
  isMigrating: false,
  viewerMigratingEvent: false,
  migrateListenerIsSet: false,
  isSplittedView: false,
  previousSplitState: false,
  isGrid: false,
  isSelectingLayer: false,
  hideToast: false,
  selectingLayerTimeouts: null,
}

export default {
  namespaced: true,
  state: defaulState,
  mutations: {
    setVideo(state, video) {
      state.video = video
    },
    setPlaying(state, playing) {
      if (!state.isMigrating) state.playing = playing
    },
    setPip(state, pip) {
      state.pip = pip
    },
    stopVideo(state) {
      state.player.stop()
      state.player.currentTime = null
    },
    setSrcObject(state, srcObject) {
      state.srcObject = srcObject
    },
    setStateSrcObject(state, srcObject) {
      if (srcObject !== null) {
        state.srcObject = srcObject
      }
    },
    setCurrentElementRef(state, currentElementRef) {
      state.currentElementRef = currentElementRef
    },
    setVideoVolume(state, volume) {
      state.video.volume = volume
    },
    setVideoMuted(state, muted) {
      state.video.muted = muted
      state.muted = muted
    },
    setVideoAutoplay(state, autoplay) {
      state.video.autoplay = autoplay
    },
    setVideoSource(state, source) {
      state.video.srcObject = source
    },
    setAutoPlayMuted(state, autoPlayMuted) {
      state.autoPlayMuted = autoPlayMuted
    },
    setDropup(state, name) {
      state.dropup = name != state.dropup ? name : ''
    },
    setMobile(state, status) {
      state.isMobile = status
    },
    setIsLive(state, isLive) {
      if (!isLive && document.pictureInPictureElement) {
        document.exitPictureInPicture()
      }
      state.isLive = isLive
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
      state.castOptions.loading = isLoading
    },
    toggleFullscreen(state) {
      state.fullscreen = !state.fullscreen
    },
    setTrackWarning(state, trackWarning) {
      state.trackWarning = trackWarning
    },
    setCastOptions(state, options) {
      state.castOptions = options
    },
    setCastDevice(state, castDevice) {
      state.castDevice = castDevice
    },
    setCastAvailable(state, castAvailable) {
      state.castAvailable = castAvailable
    },
    setAirPlayAvailable(state, airPlayAvailable) {
      state.airPlayAvailable = airPlayAvailable
    },
    setCastIsConnected(state, castIsConnected) {
      state.castIsConnected = castIsConnected
    },
    setViewerCount(state, viewerCount) {
      state.viewerCount = viewerCount
    },
    handleReconnection(state, { error, timeout }) {
      state.reconnection.error = error
      state.reconnection.timeout = timeout
      state.reconnection.status = true
      setTimeout(() => {
        state.reconnection.status = false
        state.reconnection.error = null
        state.reconnection.timeout = null
      }, timeout)
    },
    setIsMigrating(state, isMigrating) {
      state.isMigrating = isMigrating
    },
    setViewerMigratingEvent(state, viewerMigratingEvent) {
      state.viewerMigratingEvent = viewerMigratingEvent
    },
    setMigrateListenerIsSet(state, migrateListenerIsSet) {
      state.migrateListenerIsSet = migrateListenerIsSet
    },
    setIsSplittedView(state, isSplittedView) {
      state.isSplittedView = isSplittedView
    },
    setPreviousSplitState(state, previousSplitState) {
      if (!state.isMigrating) {
        state.previousSplitState = previousSplitState
      }
    },
    setIsGrid(state, isGrid) {
      state.isGrid = isGrid
    },
    setIsSelectingLayer(state, isSelectingLayer) {
      state.isSelectingLayer = isSelectingLayer
    },
    setHideToastError(state, hideToast) {
      state.hideToast = hideToast
    },
    setSelectingLayerTimeout(state, selectingLayerTimeout) {
      state.selectingLayerTimeouts = selectingLayerTimeout
    },
  },
  getters: {},
}
