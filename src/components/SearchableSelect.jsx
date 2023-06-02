import { useState } from 'react'
import '../styles/searchSelect.css'
import Select from 'react-select'

export default function SearchableSelect ({ options }) {
  if (!options) return

  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '4px',
      boxShadow: `2px 10px 17px 0px rgba(0,0,0,0.49);
      -webkit-box-shadow: 2px 10px 17px 0px rgba(0,0,0,0.49);
      -moz-box-shadow: 2px 10px 17px 0px rgba(0,0,0,0.49);`,
      border: '1px solid #ccc',
      width: '15em'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
      boxShadow: `2px 10px 17px 0px rgba(0,0,0,0.49);
      -webkit-box-shadow: 2px 10px 17px 0px rgba(0,0,0,0.49);
      -moz-box-shadow: 2px 10px 17px 0px rgba(0,0,0,0.49);`,
      border: '1px solid #ccc',
      // background: '#212121',
      color: '#212121',
      width: '15em'

    })
  }

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleSelectChange}
      styles={customStyles}
      placeholder='Search...'
      isSearchable
    />
  )
};
