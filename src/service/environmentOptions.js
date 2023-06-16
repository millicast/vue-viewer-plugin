import store from '../store'

export const defaultEnvOptions = {
  NODE_ENV: '',
  VUE_APP_TURN_ENDPOINT: '',
  VUE_APP_LIVEWS_ENDPOINT: '',
  VUE_APP_DIRECTOR_ENDPOINT: '',
  VUE_APP_PUBLIC_PATH: '',
  VUE_APP_REPORT_URL: '',
  VUE_APP_CHROMECAST_ID: '',
}

export default function processEnvironmentOptions(environment) {
  const options = {
    NODE_ENV: environment?.NODE_ENV ?? process.env.DEFAULT_NODE_ENV,
    VUE_APP_TURN_ENDPOINT: environment?.VUE_APP_TURN_ENDPOINT ?? process.env.VUE_APP_DEFAULT_TURN_ENDPOINT,
    VUE_APP_LIVEWS_ENDPOINT: environment?.VUE_APP_LIVEWS_ENDPOINT ?? process.env.VUE_APP_DEFAULT_LIVEWS_ENDPOINT,
    VUE_APP_DIRECTOR_ENDPOINT: environment?.VUE_APP_DIRECTOR_ENDPOINT ?? process.env.VUE_APP_DEFAULT_DIRECTOR_ENDPOINT,
    VUE_APP_PUBLIC_PATH: environment?.VUE_APP_PUBLIC_PATH ?? process.env.VUE_APP_DEFAULT_PUBLIC_PATH,
    VUE_APP_REPORT_URL: environment?.VUE_APP_REPORT_URL ?? process.env.VUE_APP_DEFAULT_REPORT_URL,
    VUE_APP_CHROMECAST_ID: environment?.VUE_APP_CHROMECAST_ID ?? process.env.VUE_APP_DEFAULT_CHROMECAST_ID
  }

  store.commit('Params/setEnvironmentOptions', { ...defaultEnvOptions, ...options })
}