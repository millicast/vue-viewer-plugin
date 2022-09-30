import store from '../store'

// const availableControls = ['play', 'volume', 'pip', 'fullscreen', 'cast', 'liveBadge', 'userCount', 'settings']

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

    store.commit('Params/setQueryParams', { ...defaultOptions, ...options })
}
