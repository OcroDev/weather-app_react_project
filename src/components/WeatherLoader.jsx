import '../styles/weatherLoader.css'

import React from 'react'

export function WeatherLoader () {
  return (

    <div class='loader-container'>
      <div class='cloud front'>
        <span class='left-front' />
        <span class='right-front' />
      </div>
      <span class='sun sunshine' />
      <span class='sun' />
      <div class='cloud back'>
        <span class='left-back' />
        <span class='right-back' />
      </div>
    </div>

  )
}
