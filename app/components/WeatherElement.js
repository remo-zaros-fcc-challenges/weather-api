import weatherElementData from './weatherElementData'
import loadImage from '../js/loadImage'
import getIconName from '../js/getIconName'

export default function (data) {
  let image, id, daytime
  const iconElement = document.createElement('div')
  const dataElement = document.createElement('div')
  iconElement.setAttribute('class', 'weather-status-icon')
  dataElement.setAttribute('id', 'weatherElement')

  id = data.weather[0].id
  daytime = /d.png/g.test(data.weather[0].icon)
  try {
    iconElement.innerHTML = `<svg class="icon">
                               <use xlink:href="#${getIconName(id, daytime)}"/>
                             </svg>`
    dataElement.innerHTML = weatherElementData(data)
    dataElement.querySelector('.weather-status-icon').replaceWith(iconElement)

    return dataElement
  } catch (e) {
    console.log(e)
  }
}
