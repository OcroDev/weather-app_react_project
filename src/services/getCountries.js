import { ajax } from '../tools/ajax'
import { APIS_URLS } from './const_urls'

export const getCountries = async () => {
  const optionsRequest = {
    method: 'GET',
    url: APIS_URLS.restCountries
  }
  return await ajax(optionsRequest)
}
