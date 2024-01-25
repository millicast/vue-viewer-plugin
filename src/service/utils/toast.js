import { useToast } from 'vue-toastification'
import store from '../../../src/store'

const TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info"
}

class CustomToast {
  constructor() {
    this.toast = useToast()
    this.store = store
  }

  showToast(type, message) {
    if (this.shouldShowError(type)) {
      this.showToaster(type, message)
    }
  }

  showToaster(type, message) {
    switch (type) {
      case TYPE.ERROR:
        this.toast.error(message)
        break
      case TYPE.WARNING:
        this.toast.warning(message)
        break
      case TYPE.INFO:
        this.toast.info(message)
        break
      case TYPE.SUCCESS:
        this.toast.success(message)
        break
      default:
        break
    }
  }

  shouldShowError(type) {
    const hideToast = this.store?._state?.data?.Controls.hideToast
    return !(hideToast ? hideToast.includes(type) : false)
  }
}

export default CustomToast
