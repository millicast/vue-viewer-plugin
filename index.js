import videoPlayer from './src/App.vue'

import baseModal from './src/components/UI/BaseModal'
import baseButton from './src/components/UI/BaseButton'

import store from './src/store'

import toast from 'vue-toastification'
import controls from './src/store/modules/controls'
import layers from './src/store/modules/layers'
import params from './src/store/modules/params'
import sources from './src/store/modules/sources'
import errors from './src/store/modules/errors'
import viewConnection from './src/store/modules/viewConnection'

const filterBeforeCreate = (toast, toasts) => {
  if (toasts.filter((t) => t.type === toast.type).length !== 0) {
    return false
  }
  return toast
}

export default {
  install(vue, options) {
    if (!options.store) {
      vue.use(store)
    } else {
      options.store.registerModule('Controls', controls)
      options.store.registerModule('Layers', layers)
      options.store.registerModule('Errors', errors)
      options.store.registerModule('Params', params)
      options.store.registerModule('Sources', sources)
      options.store.registerModule('ViewConnection', viewConnection)
    }

    vue.use(toast, {
      transition: 'Vue-Toastification__fade',
      maxToasts: 2,
      newestOnTop: true,
      position: 'top-center',
      closeOnClick: false,
      closeButton: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: false,
      timeout: false,
      filterBeforeCreate,
    })

    vue.component('base-modal', baseModal)
    vue.component('base-button', baseButton)

    vue.component('VideoPlayer', videoPlayer)
  },
}
