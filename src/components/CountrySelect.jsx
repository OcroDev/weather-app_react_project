import useCountries from '../hooks/useCountries'

export function CountrySelect ({ countryHandler }) {
  const countries = useCountries()

  return (
    <>
      <label htmlFor='countries'>Select your country </label>
      <select name='contries' onChange={countryHandler}>
        <option value=''>Choose a country</option>
        {countries.map(({ name, cca2, flag }) => <option key={cca2} value={cca2}>{name.common} {flag}</option>)}
      </select>
    </>
  )
}
