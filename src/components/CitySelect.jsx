export function CitySelect ({ allCities, cityHandler }) {
  return (
    <>
      <label htmlFor='cities'>Choose a city </label>
      <select name='cities' onChange={cityHandler}>
        <option value=''>Choose a City</option>
        {allCities.map(({ id, name }) => {
          return <option key={id} value={id}>{name}</option>
        })}
      </select>
    </>
  )
}
