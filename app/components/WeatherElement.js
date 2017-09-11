import weatherElementData from  './weatherElementData.js'
import loadImage from '../js/loadImage.js'
import getIconName from '../js/getIconName'

export default async function (data) {
  let image, id, daytime
  const container = document.createElement('div')
  const dataElement = document.createElement('div')
  container.setAttribute('id', 'weatherElement')

  id = data.weather[0].id
  daytime = /d.png/g.test(data.weather[0].icon)
  console.log('daytime', id)

  try {
    image = await loadImage(`../assets/weather-icons/${getIconName(id, daytime)}`)
    dataElement.innerHTML = weatherElementData(data)
    container.append(image)
    container.append(dataElement)

    return container
  } catch(e) {
    console.log(e)
  }
}
