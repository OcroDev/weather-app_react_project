import { Select } from 'antd'
import SearchableSelect from './SearchableSelect'

export function CitySelect ({ allCities, cityHandler }) {
  const citiop = allCities.map(({ id, name }) => ({ value: id, label: name }))
  return (
    <>
      <Select
        showSearch
        // style={{ width: '100%' }}
        placeholder='Search to your City'
        optionFilterProp='children'
        filterOption={(value, option) => (option?.label ?? '').includes(value)}
        filterSort={(optionA, optionB) => (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '')
            .toLowerCase())}
        options={allCities.map(({ id, name }) => ({ value: id, label: name }))}
        onChange={cityHandler}
      />

      <SearchableSelect
        options={citiop}
        onChange={cityHandler}
      />

    </>
  )

  // return (
  //   <>
  //     <label htmlFor='cities'>Choose a city </label>
  //     <select name='cities' onChange={cityHandler}>
  //       <option value=''>Choose a City</option>
  //       {allCities.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name }) => {
  //         return <option key={id} value={id}>{name}</option>
  //       })}
  //     </select>
  //   </>
  // )
}
