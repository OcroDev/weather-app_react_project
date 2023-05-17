export function CitySelect ({ allCities }) {
  return (
    <>
      <label htmlFor='cities'>Choose a city </label>
      <select name='cities'>
        {allCities.map(({ id, name }) => {
          return <option key={id} value={id}>{name}</option>
        })}
      </select>
    </>
  )
}
