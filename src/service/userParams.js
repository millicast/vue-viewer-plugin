import store from '../store'

// const availableControls = ['play', 'volume', 'pip', 'fullscreen', 'cast', 'liveBadge', 'userCount', 'settings']

export const defaultOptions = {
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
  disableSettings: false,
  forcePlayoutDelay: false,
  multisource: false
}

export default function setUserParams({
  streamId,
  audioOnly,
  videoOnly,
  token,
  image,
  directorUrl,
  hideButtons,
  autoplay,
  muted,
  disableSettings,
  noDelay,
  multisource
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
  options.disableSettings = disableSettings ?? false
  options.multisource = multisource ?? false
  if (multisource) {
    store.commit('Controls/setIsSplittedView', true)
  }
  if (noDelay) {
    options.forcePlayoutDelay = { min: 0, max: 0 }
  }
  store.commit('Params/setQueryParams', { ...defaultOptions, ...options })
}