import store from '../../store'
const { state } = store

export const getAccountId = () => {
  return state.Params.viewer.streamId?.match(/^(.*?)\/.*$/)?.[1]
}

export const getStreamName = () => {
  return state.Params.viewer.streamId?.match(/^.*?\/(.*)$/)?.[1]
}
