import {kmph} from '../js/convertion'
import getIconName from '../js/getIconName'

export default function (data) {
  return `
    <h2>${data.name}</h2>
    <div class="weather-status-icon"></div>
    <h1 id="temp" class="weather-element__temp" data-tempc="${data.main.temp}">
      ${Math.round(data.main.temp * 10)/10} &deg;C
    </h1>
    <p>${data.weather[0].description}</p>
    <div class="wind-unit">
      <p>wind: <span id="wind-unit__speed" data-windm="${kmph(data.wind.speed)}">${kmph(data.wind.speed)} km/h</p>
      <p style="transform: rotate(-${data.wind.deg}deg)">${data.wind.deg}</p>
    </div>`
}

export function getWeatherIcon (id, daytime) {
  return `<svg class="icon">
            <use xlink:href="#${getIconName(id, daytime)}"/>
          </svg>`
}

export function getDaytimeIcon (daytime) {
  return `<svg class="icon">
            <use xlink:href="#${getIconName(id, daytime)}"/>
          </svg>`
}
