import { useToast } from 'vue-toastification'
import store from '../../../src/store'

const TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}

class CustomToast {
  constructor() {
    this.toast = useToast()
    this.store = store
  }

  showToast(type, message, options) {
    this.toast = useToast()
    this.toast.clear()
    if (this.shouldShowError(type)) {
      this.showToaster(type, message, options)
    }
  }

  showToaster(type, message, options) {
    switch (type) {
      case TYPE.ERROR:
        this.toast.error(message, options)
        break
      case TYPE.WARNING:
        this.toast.warning(message, options)
        break
      case TYPE.INFO:
        this.toast.info(message, options)
        break
      case TYPE.SUCCESS:
        this.toast.success(message, options)
        break
      default:
        break
    }
  }

  shouldShowError(type) {
    const hideToast = this.store?._state?.data?.Controls.hideToast
    return !(hideToast ? hideToast.includes(type) : false)
  }

  clear() {
    this.toast = useToast()
    this.toast.clear()
  }

  updateDefaults(options) {
    this.toast = useToast()
    this.toast.updateDefaults(options)
  }
}

export default CustomToast
