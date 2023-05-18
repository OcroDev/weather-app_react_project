import React from 'react'

export default function Weather ({ weatherData }) {
  if (weatherData.cod === '404') {
    return (
      <>
        <h3>Oops!</h3>
        <h4>Sorry, our database does not have climate information for this city </h4>
      </>
    )
  }
  return (
    <section>
      <p>Temperature: {weatherData?.main.temp} °C</p>
      <p>Humidity: {weatherData?.main.humidity}%</p>
      <p>Thermal sensation: {weatherData?.main.feels_like} °C</p>
      <p>Description: {weatherData?.weather[0].description}</p>
    </section>
  )
}
