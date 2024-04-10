import { watch } from 'vue'
import store from '../../store'
const { commit, state } = store
const bitsUnitsStorage = ['bps', 'kbps', 'mbps', 'gbps']
const qualityNames = {
  2: ['High', 'Low'],
  3: ['High', 'Medium', 'Low']
}

let previousSideLayers = []

export const updateLayers = (evntData) => {
  const { data } = evntData
  const activeQualities = []
  const inactiveQualities = []
  const mainMedia = { "0" : data.medias[0]}
  const encodings = Object.values(mainMedia)
  const [, ...rest] = Object.entries(data.medias)
  const sideLayers = Object.fromEntries(rest)
  commit('Layers/setMedias', data.medias)
  setSideSourcesQualityLow(sideLayers)
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
    activeQualities.sort((quality, nextQuality) =>  nextQuality.height - quality.height ) 
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

  const source = state.Sources.selectedVideoSource
  const mediaLayers = state.Layers.medias[source.mid].layers
  const quality = mediaLayers.find(layer => layer.simulcastIdx === media.simulcastIdx)
  state.ViewConnection.millicastView?.project(source.sourceId, [
    {
      mediaId: source.mid, 
      layer: quality,
      media: 'video',
      promote: !quality,
    }  ])
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

const setSideSourcesQualityLow = (newLayers) => {
  const { isSplittedView, isGrid } = state.Controls

  if ( isSplittedView && !isGrid ){
    const layersMids = Object.keys(previousSideLayers)
    const newLayersMids = Object.keys(newLayers)
    const difference = newLayersMids.filter(key => !layersMids.includes(key))

    const diffActiveLayers = difference.reduce((diffActiveLayers, key) => {
      const activeLayers = newLayers[key].active.length > 0 ? newLayers[key].active : null
      if (activeLayers != null) diffActiveLayers[key] = activeLayers
      return diffActiveLayers
    }, {})

    const keys = Object.keys(diffActiveLayers)

    if (keys.length === 0 ) return

    const transceiverSourceState = state.Sources.transceiverSourceState

    const videoSourceKeys = keys.reduce((videoSourceKeys, key) => {
      videoSourceKeys.push(transceiverSourceState[key])
      return videoSourceKeys
    }, [])

    // Set low quality for side video source streams
    videoSourceKeys.forEach( (source) => {
      if ( source.sourceId !== null && source.mid in diffActiveLayers ){
        diffActiveLayers[source.mid].sort((layer, nextLayer) =>  nextLayer.id - layer.id )   
        state.ViewConnection.millicastView?.project(source.name, [
          { 
            mediaId: source.mid, 
            layer: {encodingId: diffActiveLayers[source.mid].pop().id}, 
            trackId: source.trackId, 
            media: 'video'
          }
        ]) 
      }
    })

    previousSideLayers = newLayers
  } 
}

const resetPreviousLayers = (isSplittedView) => {
  if ( !isSplittedView ){
    previousSideLayers = []
  }
}

watch(() => state.Controls.isSplittedView, resetPreviousLayers, { deep: true })