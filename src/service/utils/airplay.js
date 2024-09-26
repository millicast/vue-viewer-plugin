import store from '../../store/index.js'
const { commit } = store

export const handleSetAirPlay = async () => {
  if (window.WebKitPlaybackTargetAvailabilityEvent) {
    document
      .getElementById('player')
      .addEventListener('webkitplaybacktargetavailabilitychanged', (event) => {
        switch (event.availability) {
          case 'available':
            commit('Controls/setAirPlayAvailable', true)
            break
          case 'not-available':
            commit('Controls/setAirPlayAvailable', false)
            break
        }
      })
  }
}

export const handleCastWithAirPlay = async () => {
  if (!window.WebKitPlaybackTargetAvailabilityEvent) {
    return
  }
  const videoPlayer = document.getElementById('player')
  videoPlayer.webkitShowPlaybackTargetPicker()
}
