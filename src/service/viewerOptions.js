import store from '../store'

export const availableControls = ['play', 'volume', 'pip', 'fullscreen', 'cast', 'liveBadge', 'userCount', 'settings']

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
  layout: null,
  showLabels: true
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
  layout,
  showLabels
}) {
  const options = {}

  options.streamId = streamId
  options.videoOnly = videoOnly ?? false
  options.audioOnly = audioOnly ?? false
  options.token = token
  options.placeholderImg = image
  options.directorUrl = directorUrl
  options.hideButtons = hideButtons ?? []
  options.autoplay = autoplay ?? true
  options.muted = muted ?? false
  options.multisource = multisource ?? false
  options.layout = layout
  options.showLabels = showLabels
  if (multisource) {
    store.commit('Controls/setIsSplittedView', true)
  }
  if (noDelay) {
    options.forcePlayoutDelay = { min: 0, max: 0 }
  }
  if (options.layout && options.layout === 'grid') {
    store.commit('Controls/setIsGrid', true)
  }
  store.commit('Params/setViewerOptions', { ...defaultViewerOptions, ...options })
}