import { ajax } from '../tools/ajax'
import { APIS_URLS } from './const_urls'

export const getCities = async (countryID = 'US') => {
  const optionsRequest = {
    method: 'GET',
    url: APIS_URLS.spottCities,
    params: {
      limit: 100,
      type: 'CITY',
      country: `${countryID}` ?? 'US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
  }
  return await ajax(optionsRequest)
}
