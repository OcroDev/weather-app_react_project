import { ajax } from '../tools/ajax'

export const getTime = (optionRequest) => {
  return ajax(optionRequest)
}
