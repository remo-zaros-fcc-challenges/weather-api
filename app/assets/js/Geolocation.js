export function geoFind () {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject('geolocation not available.')
    }

    function success(position) {
      const latitude  = position.coords.latitude
      const longitude = position.coords.longitude
      return resolve({"lat": latitude, "long": longitude})
    }

    function error() {
      return reject('Error')
    }
    navigator.geolocation.getCurrentPosition(success, error)
  })
}
