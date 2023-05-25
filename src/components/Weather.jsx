import React from 'react'
import '../styles/weather.css'
import WindSvg from './WindSvg'
import HumiditySvg from './HumiditySvg'
import AqiSvg from './AqiSvg'
import RealFeelSvg from './RealFeelSvg'
import PressureSvg from './PressureSvg'
export default function Weather ({ weatherData, countryName, cityName }) {
  if (weatherData.cod === '404') {
    return (
      <>
        <h3>Oops!</h3>
        <h4>Sorry, our database does not have climate information for this city </h4>
      </>
    )
  }

  return (
    <>
      <div className='cardm'>
        <div className='card'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          <div className='main'>23 °C</div>
          <div className='mainsub'>{cityName} <br /> {countryName}</div>

        </div>

        <div className='card2'>
          <div className='upper'>
            <div className='humidity'>
              <div className='humiditytext'>Humidity<br />{weatherData?.main.humidity}%</div>
            </div>
            <HumiditySvg />
            <div className='air' width='30' height='30'>
              <div className='airtext'>Wind<br /> {weatherData?.wind.speed} Km/h</div>
            </div>
            <WindSvg />
          </div>

          <div className='lower'>
            <div className='aqi'>
              <AqiSvg />
              <div className='aqitext'>AQI<br />{weatherData?.wind.gust}</div>
            </div>

            <div className='realfeel'>
              <RealFeelSvg />
              <div className='realfeeltext'>Real Feel<br />{weatherData?.main.feels_like} °C</div>
            </div>
            <div className='pressure'>
              <PressureSvg />
              <div className='pressuretext'>Pressure<br />{weatherData?.main.pressure} mbar</div>
            </div>
            <div className='card3' />
          </div>
        </div>
      </div>
    </>
  )
/*
  return (
    <section className='container'>
      <div className='widget'>
        <div className='detail'>
          <div className='temperature'>{weatherData?.main.temp}°</div>
          <div className='summary'>
            <p className='summaryText'>{weatherData.weather[0]
              .description.charAt(0)
              .toUpperCase() + weatherData.weather[0]
              .description
              .slice(1)}
            </p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          </div>
          <div className='precipitation'>Precipitation: {weatherData?.main.humidity}%</div>
          <div className='wind'>Wind: {weatherData?.wind.speed} mph</div>
        </div>
      </div>
    </section>
  )
  https://uiverse.io/Praashoo7/old-dingo-81
  */
}
