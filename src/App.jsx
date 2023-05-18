
import { useState } from 'react'
import { getCities } from './services/getCities'
import { CitySelect } from './components/CitySelect'
import { CountrySelect } from './components/CountrySelect'
import { getWeather } from './services/getWeather'

function App () {
  // States
  const [cities, setCities] = useState()
  const [weather, setWeather] = useState({})

  const countryHandler = async (e) => {
    if (!e.currentTarget.value) {
      setCities(null)
    } else {
      setCities(await getCities(e.currentTarget.value))
    }
  }
  const cityHandler = async (e) => {
    const citySelected = e.target.value
    const newCity = cities.find((element) => element.id === citySelected)
    setWeather(await getWeather(newCity.name))
  }

  console.log(weather)

  return (
    <>
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <section>
          <CountrySelect countryHandler={countryHandler} />
        </section>
        <section>
          {Boolean(cities?.length) && <CitySelect allCities={cities} cityHandler={cityHandler} />}
        </section>
      </main>
    </>
  )
}

export default App
