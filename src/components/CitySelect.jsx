import {Select} from 'antd'

export function CitySelect({ allCities, cityHandler }) {
  return (
    <>
      <label htmlFor='cities'>Choose a city </label>
      <select name='cities' onChange={cityHandler}>
        <option value=''>Choose a City</option>
        {allCities.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name }) => {
          return <option key={id} value={id}>{name}</option>
        })}
      </select>
    </>
  )
}
