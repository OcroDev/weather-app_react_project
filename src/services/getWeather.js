import ajax from '../tools/ajax'
import { APIS_URLS } from './const_urls'

export const getWeather = (latitude, longitude) => {
  const optionsRequest = {
    method: 'GET',
    url: APIS_URLS.openWeather,
    params: {
      lat: latitude,
      lon: longitude,
      appid: '29622ca559a3e8d56af934e111c2b28c',
      units: 'metric'
    }
  }
  return ajax(optionsRequest)
}
