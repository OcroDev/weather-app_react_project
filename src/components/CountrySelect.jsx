import {Select} from 'antd'

export function CountrySelect ({ countryHandler, countries }) {
  
  
  function handler(e) {
    console.log(e)
  }
  return (
    <>
      <Select
        showSearch
        style={{ width: '200px' }}
        placeholder="Search to your Country"
        optionFilterProp="children"
        filterOption={(value, option) => (option?.label ?? '').includes(value)}
        filterSort={(optionA, optionB) => (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '')
            .toLowerCase())
        }
        options={countries.map(({ name, cca2 }) => ({ value: cca2, label: name.common.toLowerCase() })  )}
        onChange={countryHandler}
      />
    </>
  )
}
