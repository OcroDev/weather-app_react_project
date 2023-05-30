import '../styles/weather.css'
import WindSvg from './WindSvg'
import HumiditySvg from './HumiditySvg'
import AqiSvg from './AqiSvg'
import RealFeelSvg from './RealFeelSvg'
import PressureSvg from './PressureSvg'
import { useEffect, useRef, useState } from 'react'

export default function Weather ({ weatherData, countryName, cityName }) {
  if (weatherData.cod === '404') {
    return (
      <>
        <h3>Oops!</h3>
        <h4>Sorry, our database does not have climate information for this city </h4>
      </>
    )
  }

  const [getImg, setGetImg] = useState(null)
  const widthIcons = useRef(30)
  const heightIcons = useRef(30)

  useEffect(() => {
    function handleResize () {
      const isMobile = window.innerWidth <= 750
      if (isMobile) {
        setGetImg(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
        heightIcons.current = 20
        widthIcons.current = 20
      } else {
        setGetImg(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`)
        heightIcons.current = 40
        widthIcons.current = 40
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className='cardm'>
        <div className='card'>
          <img className='weather' src={getImg} />
          <div className='main'>23 °C</div>
          <div className='mainsub'>{cityName}, <br /> {countryName}</div>
        </div>

        <div className='card2'>
          <div className='upper'>
            <div className='humidity'>
              <div className='humiditytext'>Humidity<br />{weatherData?.main.humidity}%</div>
              <HumiditySvg />
            </div>
            <div className='air'>
              <div className='airtext'>Wind<br /> {weatherData?.wind.speed} Km/h</div>
              <WindSvg width={30} heigth={30} />
            </div>
          </div>

          <div className='lower'>
            <div className='aqi'>
              <AqiSvg width={widthIcons.current} height={heightIcons.current} />
              <div className='aqitext'>AQI<br />{weatherData?.wind.gust}</div>
            </div>

            <div className='realfeel'>
              <RealFeelSvg width={widthIcons.current} height={heightIcons.current} />
              <div className='realfeeltext'>Real Feel<br />{weatherData?.main.feels_like} °C</div>
            </div>
            <div className='pressure'>
              <PressureSvg width={widthIcons.current} height={heightIcons.current} />
              <div className='pressuretext'>Pressure<br />{weatherData?.main.pressure} mbar</div>
            </div>
            <div className='card3' />
          </div>
        </div>
      </div>
    </>
  )
/*
  https://uiverse.io/Praashoo7/old-dingo-81
  */
}
