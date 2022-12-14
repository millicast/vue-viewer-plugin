import store from '../../store'
const { commit, state } = store

export const updateLayers = (evntData) => {
  const { data } = evntData
  const activeQualities = []
  const inactiveQualities = []
  const encodings = Object.values(data.medias)
  encodings.forEach((encoding) => {
    if (
      encoding?.active.length === 1 &&
      encoding?.active[0]?.layers.length > 1
    ) {
      encoding.active[0]?.layers?.forEach((quality) => {
        if (
          !activeQualities.some(
            (info) => info.spatialLayerId === quality.spatialLayerId
          )
        ) {
          quality.id = encoding.active[0].id
          quality.selectId = quality.spatialLayerId
          quality.disabled = quality.bitrate ? false : true
          activeQualities.push(quality)
        }
      })
      encoding.inactive[0]?.layers?.forEach((quality) => {
        if (
          !inactiveQualities.some(
            (info) => info.spatialLayerId === quality.spatialLayerId
          )
        ) {
          inactiveQualities.push(quality)
        }
      })
    } else {
      encoding.active?.forEach((quality) => {
        if (!activeQualities.some((info) => info.id === quality.id)) {
          quality.selectId = quality.id
          quality.disabled = quality.bitrate ? false : true
          activeQualities.push(quality)
        }
      })
      encoding.inactive?.forEach((quality) => {
        if (!inactiveQualities.some((info) => info.id === quality.id)) {
          inactiveQualities.push(quality)
        }
      })
    }
  })
  activeQualities.sort((a, b) => {
    return b.bitrate - a.bitrate
  })
  if (activeQualities.length === 2) {
    activeQualities[0].name = 'High'
    activeQualities[1].name = 'Low'
    activeQualities.unshift({ name: 'Auto' })
  } else if (activeQualities.length === 3) {
    activeQualities[0].name = 'High'
    activeQualities[1].name = 'Medium'
    activeQualities[2].name = 'Low'
    activeQualities.unshift({ name: 'Auto' })
  }

  if (activeQualities.length != state.Layers.medias.active.length) {
    commit('Layers/setSelectedQuality', { name: 'Auto' })
  }
  commit('Layers/setMedias', {
    active: activeQualities,
    inactive: inactiveQualities,
  })
}

export const deleteLayers = () => {
  commit('Layers/setMedias', { active: [], inactive: [] })
  commit('Layers/setSelectedQuality', { name: 'Auto' })
}

export const handleSelectQuality = (media) => {
  let selectedData = {}
  selectedData.encodingId = media.id
  if (!selectedData.encodingId && media.spatialLayerId !== null) {
    selectedData.spatialLayerId = parseInt(media.spatialLayerId)
  }
  const data =
    selectedData.encodingId ||
    selectedData.encodingId === 0 ||
    selectedData.spatialLayerId ||
    selectedData.spatialLayerId === 0
      ? selectedData
      : {}
  state.ViewConnection.millicastView.select(data)
  commit('Layers/selectQuality', media)
}
