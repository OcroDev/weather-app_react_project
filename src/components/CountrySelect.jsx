import { Select } from 'antd'

export function CountrySelect ({ countryHandler, countries }) {
  return (
    <>
      <Select
        showSearch
        // style={{ width: '220px' }}
        placeholder='Search to your Country'
        optionFilterProp='children'
        filterOption={(value, option) => (option?.label ?? '').toLowerCase().includes(value.toLowerCase())}
        filterSort={(optionA, optionB) => (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '')
            .toLowerCase())}
        options={countries.map(({ name, cca2 }) => ({ value: cca2, label: name.common }))}
        onChange={countryHandler}
      />

    </>
  )
}
