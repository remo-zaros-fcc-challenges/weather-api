export default function (id, daytime) {
  let d
  (daytime) ? (d = '-day') : (d = '-night')

  if (id >= 200 && id < 300) {
    return 'thunderstorm.svg'
  } else if ((id >= 300 && id < 400)||(id >= 520 && id < 600)) {
    return 'shower-rain.svg'
  } else if (id >= 500 && id < 511) {
    return 'rain.svg'
  } else if (id === 511 || (id >= 600 && id < 700)) {
    return 'snow.svg'
  } else if (id >= 700 && id < 800) {
    return 'mist.svg'
  } else if (id === 800) {
    return `clear${d}.svg`
  } else if (id === 801) {
    return `few-clouds${d}.svg`
  } else if (id === 802) {
    return 'scattered-clouds.svg'
  } else if (id === 803 || id === 804) {
    return 'broken-clouds'
  } else {
    return 'run'
  }
}
