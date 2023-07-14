import store from '../../store'
const { commit, state } = store
const bitsUnitsStorage = ['bps', 'kbps', 'mbps', 'gbps']
const qualityNames = {
  2: ['High', 'Low'],
  3: ['High', 'Medium', 'Low']
}

let activeSideSources = []

export const updateLayers = (evntData) => {
  const { data } = evntData
  const activeQualities = []
  const inactiveQualities = []
  const mainMedia = { "0" : data.medias[0]}
  const encodings = Object.values(mainMedia)
  const [, ...rest] = Object.entries(data.medias);
  const sideSources = Object.fromEntries(rest);
  commit('Layers/setMedias', data.medias)
  setSideSourcesQualityLow(sideSources)
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
  if (activeQualities.length >= 2) {
    activeQualities.sort((layer, nextLayer) =>  nextLayer.id - layer.id ) 
    const names = qualityNames[activeQualities.length] || []
    activeQualities.forEach((quality, index) => {
      quality.name = quality.height ? `${quality.height}p` : names[index] || formatBitsRecursive(quality.bitrate)
    })
    activeQualities.unshift({name: 'Auto'})
  }

  if (activeQualities.length != state.Layers.mainTransceiverMedias.active.length) {
    commit('Layers/setSelectedQuality', { name: 'Auto' })
  }
  commit('Layers/setMainTransceiverMedias', {
    active: activeQualities,
    inactive: inactiveQualities,
  })
}

export const deleteLayers = () => {
  commit('Layers/setMainTransceiverMedias', { active: [], inactive: [] })
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

export const formatBitsRecursive = (value, unitsStoragePosition = 0) => {
  const newValue = value / 1000
  if ((newValue < 1) || (newValue > 1 && (unitsStoragePosition + 1) > bitsUnitsStorage.length)) {
    return `${Math.round(value * 100) / 100} ${bitsUnitsStorage[unitsStoragePosition]}`
  } else if (newValue > 1) {
    return formatBitsRecursive(newValue, unitsStoragePosition + 1)
  }
}

const setSideSourcesQualityLow = (sideSources) => {
  const isSplittedView = state.Controls.isSplittedView;
  const isGrid = state.Controls.isGrid;
  if ( isSplittedView && !isGrid ){

    const keys1 = Object.keys(activeSideSources);
    const keys2 = Object.keys(sideSources);
    const difference = keys2.filter(key => !keys1.includes(key));

    const result = difference.reduce((acc, key) => {
      const obj = sideSources[key].active.length > 0 ? sideSources[key].active : null
      if (obj != null) acc[key] = obj;
      return acc;
    }, {});

    if ( Object.keys(result).length === 0 ) return

    const videoSources = state.Sources.videoSources;
    // Set low quality for side video source streams
    videoSources.forEach( (source) => {
      if ( source.sourceId !== null && source.mid in result ){
        result[source.mid].sort((layer, nextLayer) =>  nextLayer.id - layer.id )   
        state.ViewConnection.millicastView?.project(source.name,[{ 
          mediaId: source.mid, 
          layer: {
            encodingId: result[source.mid].pop().id
          }, 
          trackId: 'video', 
          media: 'video'
        }])
      }
    })

    activeSideSources = sideSources

  } else {
    activeSideSources = []
  }
}