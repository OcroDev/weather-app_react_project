import { useEffect } from 'react'

export default function useWeatherImage (data) {
  let image

  useEffect(() => {
    function handleResize () {
      const isMobile = window.innerWidth <= 750
      console.log(window.innerWidth)
      console.log(isMobile)
      if (isMobile) {
        image = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      } else {
        image = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return image
}
