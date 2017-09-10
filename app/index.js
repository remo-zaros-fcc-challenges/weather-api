import './main.css'
import {geoFind} from './assets/js/Geolocation'
import {weatherElement} from './components/WeatherElement'

async function getCurrentLocation () {
  try {
    return await geoFind()
  } catch (e) {
    console.log(e)
  }
}

async function buildUrl (loc) {
  const l = await loc
  return `https://fcc-weather-api.glitch.me/api/current?lat=${l.lat}&lon=${l.long}`
}

async function fetchWeather (url) {
  const u = await url
  try {
    let response = await fetch(u)
    return response.json()
  } catch (e) {
    console.log(e)
  }
}

async function renderWeatherElement (prom) {
  const data = await prom
  document.querySelector('main').append(weatherElement(data))
}

function cellToFahr (cell) {
  return cell * 9 / 5 + 32
}

console.log(renderWeatherElement(fetchWeather(buildUrl(getCurrentLocation()))))
