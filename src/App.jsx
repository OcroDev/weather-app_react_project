
import { useState } from 'react'
import { getCities } from './services/getCities'
import { CitySelect } from './components/CitySelect'
import { CountrySelect } from './components/CountrySelect'

function App () {
  // States
  const [cities, setCities] = useState()

  const countryHandler = async (e) => {
    if (!e.currentTarget.value) {
      setCities(null)
    } else {
      setCities(await getCities(e.currentTarget.value))
    }
  }

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
          {cities?.length && <CitySelect allCities={cities} />}
        </section>
      </main>
    </>
  )
}

export default App
