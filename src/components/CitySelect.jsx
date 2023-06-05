import { Select } from 'antd'

export function CitySelect ({ allCities, cityHandler }) {
  return (
    <>
      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder='Search to your City'
        optionFilterProp='children'
        filterOption={(value, option) => (option?.label ?? '').toLowerCase().includes(value.toLowerCase())}
        filterSort={(optionA, optionB) => (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '')
            .toLowerCase())}
        options={allCities.map(({ id, name }) => ({ value: id, label: name }))}
        onChange={cityHandler}
      />
    </>
  )
}
