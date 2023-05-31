
import { useRef, useState } from 'react'
import { getCities } from './services/getCities'
import { CitySelect } from './components/CitySelect'
import { CountrySelect } from './components/CountrySelect'
import { getWeather } from './services/getWeather'
import Weather from './components/Weather'
import { Spinner } from './components/Spinner'
import { WeatherLoader } from './components/WeatherLoader'
import './App.css'
import useCountries from './hooks/useCountries'

function App () {
  // States
  const countries = useCountries()
  const [cities, setCities] = useState()
  const [weather, setWeather] = useState(null)
  const [cityLoader, setCityLoader] = useState(false)
  const [weatherLoader, setWeatherLoader] = useState(false)
  const countryRef = useRef()
  const cityRef = useRef()

  const countryHandler = async (e) => {
    if (!e) {
      setCities(null)
    } else {
      const country = countries.find((element) => element.cca2 === e)
      countryRef.current = country?.name.common
      setCityLoader(true)
      setCities(await getCities(e))
      setCityLoader(false)
      setWeather(null)
    }
  }

  const cityHandler = async (e) => {
    setWeather(null)
    if (!e.currentTarget.value) setWeather(null)
    const citySelected = e.target.value
    const newCity = cities.find((element) => element.id === citySelected)
    if (newCity) {
      cityRef.current = newCity.name
      setWeatherLoader(true)
      setWeather(await getWeather(newCity.name))
      setWeatherLoader(false)
    }
  }
  return (
    <>
      <header>
        <h1> ⛈️ Weather app 🌤️</h1>
      </header>
      <main>

        <section>
          <CountrySelect countryHandler={countryHandler} countries={countries} />
          {cityLoader && <Spinner />}
          {cities && <CitySelect allCities={cities} cityHandler={cityHandler} />}
        </section>

        {weatherLoader && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
              <WeatherLoader />
            </div>
          </>)}

        {weather && <Weather weatherData={weather} countryName={countryRef.current} cityName={cityRef.current} />}

      </main>

    </>
  )
}

export default App
