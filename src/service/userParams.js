import store from '../store'

export const availableControls = ['play', 'volume', 'pip', 'fullscreen', 'cast', 'liveBadge', 'userCount', 'settings']

export const defaultOptions = {
  audioOnly: false,
  autoplay: true,
  controls: true,
  directorUrl: null,
  hideButtons: [],
  muted: true,
  placeholderImg: null,
  streamId: null,
  token: null,
  chromecastId: null,
  reportUrl: null
}

export default function setUserParams({
  streamId,
  audioOnly,
  token,
  image,
  directorUrl,
  hideButtons,
  autoplay,
  muted,
  chromecastId,
  reportUrl
}) {
  const options = {}

  options.streamId = streamId
  options.audioOnly = audioOnly ?? false
  options.token = token
  options.placeholderImg = image
  options.directorUrl = directorUrl
  options.hideButtons = hideButtons ?? []
  options.autoplay = autoplay ?? true
  options.muted = muted ?? false
  options.chromecastId = chromecastId ?? null
  options.reportUrl = reportUrl ?? null

  store.commit('Params/setQueryParams', { ...defaultOptions, ...options })
}
