
import { useState } from 'react'
import { getCities } from './services/getCities'
import { CitySelect } from './components/CitySelect'
import { CountrySelect } from './components/CountrySelect'
import { getWeather } from './services/getWeather'
import Weather from './components/Weather'
import './App.css'

function App () {
  // States
  const [cities, setCities] = useState()
  const [weather, setWeather] = useState(null)

  const countryHandler = async (e) => {
    if (!e.currentTarget.value) {
      setCities(null)
    } else {
      setCities(await getCities(e.currentTarget.value))
      setWeather(null)
    }
  }
  const cityHandler = async (e) => {
    if (!e.currentTarget.value) setWeather(null)
    const citySelected = e.target.value
    const newCity = cities.find((element) => element.id === citySelected)

    if (newCity) {
      setWeather(await getWeather(newCity.name))
    }
  }
  return (
    <>
      <header>
        <h1> ⛈️ Weather app 🌤️</h1>
      </header>
      <main>

        <section>
          <CountrySelect countryHandler={countryHandler} />
          {cities && <CitySelect allCities={cities} cityHandler={cityHandler} />}
        </section>

        {weather && <Weather weatherData={weather} />}
      </main>

    </>
  )
}

export default App
