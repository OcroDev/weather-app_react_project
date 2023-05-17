import { useEffect, useState } from 'react'
import { getCountries } from '../services/getCountries'

export default function useCountries () {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    (
      async () => {
        setCountries(await getCountries())
      })()
  }, [])
  return countries
}
