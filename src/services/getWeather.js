import { ajax } from '../tools/ajax'
import { APIS_URLS } from './const_urls'

export const getWeather = async (city) => {
  const optionsRequest = {
    method: 'GET',
    url: APIS_URLS.openWeather,
    params: {
      q: city,
      appid: import.meta.env.VITE_OPEN_WEATHER_APP_KEY,
      units: 'metric'
    }
  }
  return await ajax(optionsRequest)
}
