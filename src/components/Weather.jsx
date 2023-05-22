import React from 'react'
import '../styles/weather.css'

export default function Weather ({ weatherData }) {
  if (weatherData.cod === '404') {
    return (
      <>
        <h3>Oops!</h3>
        <h4>Sorry, our database does not have climate information for this city </h4>
      </>
    )
  }

  const capitalCase = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)

  return (
    <section className='container'>
      <div className='widget'>
        <div className='detail'>
          <div className='temperature'>{weatherData?.main.temp}°</div>
          <div className='summary'>
            <p className='summaryText'>{capitalCase}</p>
          </div>
          <div className='precipitation'>Precipitation: {weatherData?.main.humidity}%</div>
          <div className='wind'>Wind: {weatherData?.wind.speed} mph</div>
        </div>
      </div>
    </section>
  )
}
