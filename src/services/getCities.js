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
      'X-RapidAPI-Key': 'a2590c6e21msh23db92b724b073cp187bcajsndd9b74186181',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
  }
  return await ajax(optionsRequest)
}
