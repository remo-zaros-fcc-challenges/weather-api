import './main.css'
import {geoFind} from './js/Geolocation'
import weatherElement from './components/WeatherElement'
import wallPaperElement from './components/wallpaper.js'

async function getCurrentLocation () {
  try {
    return await geoFind()
  } catch (e) {
    if (e === 'Error') {
      showAlert('Could not retrieve location')
    }
    console.log('get Current Location', e)
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
    console.log('fetch weather', e)
  }
}

async function renderWeatherElement (prom) {
  const data = await prom
  const wallpaper = await wallPaperElement(data)
  const element = weatherElement(data)

  document.querySelector('body').setAttribute('style', `background: url(${wallpaper})`)
  document.querySelector('#weatherElement').replaceWith(element)
  document.dispatchEvent(new CustomEvent('onContentLoaded', {'bubbles': true, 'composed': true}))
}

function cellToFahr (cell) {
  return cell * 9 / 5 + 32
}

function kmphTpMph (speed) {
  return speed * 0.6213711922
}

function kmph (speed) {
  return speed * 60 * 60 / 1000
}

renderWeatherElement(fetchWeather(buildUrl(getCurrentLocation())))
document.addEventListener('onContentLoaded', e => {
  e.target.querySelector('#loader').classList.add('loaded')
})
