import store from '../store'

export const availableControls = [
  'play',
  'volume',
  'pip',
  'fullscreen',
  'cast',
  'liveBadge',
  'userCount',
  'settings',
]

export const defaultViewerOptions = {
  audioOnly: false,
  autoplay: true,
  videoOnly: false,
  controls: true,
  directorUrl: null,
  hideButtons: [],
  muted: true,
  placeholderImg: null,
  streamId: null,
  token: null,
  forcePlayoutDelay: false,
  multisource: false,
  audioFollowsVideo: false,
  layout: null,
  showLabels: true,
  startingQuality: null,
  hideToast: null,
  mainLabel: null,
  drm: false,
  metadata: false,
  mediaBufferMs: 0,
}

export default function processViewerOptions({
  streamId,
  audioOnly,
  videoOnly,
  token,
  image,
  directorUrl,
  hideButtons,
  autoplay,
  muted,
  noDelay,
  multisource,
  audioFollowsVideo,
  layout,
  showLabels,
  startingQuality,
  hideToast,
  mainLabel,
  drm,
  forcePlayoutDelayMin,
  forcePlayoutDelayMax,
  metadata,
  mediaBufferMs,
}) {
  const options = {}

  options.streamId = streamId
  options.videoOnly = videoOnly ?? false
  options.audioOnly = audioOnly ?? false
  options.token = token
  options.placeholderImg = image
  options.directorUrl = directorUrl
  options.hideButtons = hideButtons ?? []
  options.muted = muted ?? false
  store.commit('Controls/setVideoMuted', muted)
  options.autoplay = autoplay ?? true
  store.commit('Controls/setVideoAutoplay', autoplay)
  options.multisource = multisource ?? false
  options.audioFollowsVideo = audioFollowsVideo ?? false
  options.layout = layout
  options.showLabels = showLabels
  options.drm = drm ?? false
  options.metadata = metadata
  if (multisource) {
    store.commit('Controls/setIsSplittedView', true)
  }
  if (audioFollowsVideo) {
    store.commit('Sources/setAudioFollowsVideo', true)
  }
  if (noDelay) {
    options.forcePlayoutDelay = { min: 0, max: 0 }
  }
  if (options.layout && options.layout === 'grid') {
    store.commit('Controls/setIsGrid', true)
  }
  if (startingQuality !== null) {
    options.startingQuality = startingQuality
    store.commit('Controls/setIsSelectingLayer', true)
  }
  if (hideToast !== null) {
    options.hideToast = hideToast
    store.commit('Controls/setHideToastError', hideToast)
  }
  if (mainLabel) {
    options.mainLabel = mainLabel
    store.commit('Sources/setMainLabel', options.mainLabel)
  }
  if (forcePlayoutDelayMin && forcePlayoutDelayMax) {
    if (parseInt(forcePlayoutDelayMin) && parseInt(forcePlayoutDelayMax)) {
      options.forcePlayoutDelay = {
        min: parseInt(forcePlayoutDelayMin),
        max: parseInt(forcePlayoutDelayMax),
      }
    }
  }
  if (parseInt(mediaBufferMs)) {
    options.mediaBufferMs = parseInt(mediaBufferMs)
  }

  store.commit('Params/setViewerOptions', {
    ...defaultViewerOptions,
    ...options,
  })
}
