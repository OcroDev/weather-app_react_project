import '../styles/weatherLoader.css'

import React from 'react'

export function WeatherLoader () {
  return (

    <div className='loader-container'>
      <div className='cloud front'>
        <span className='left-front' />
        <span className='right-front' />
      </div>
      <span className='sun sunshine' />
      <span className='sun' />
      <div className='cloud back'>
        <span className='left-back' />
        <span className='right-back' />
      </div>
    </div>

  )
}
