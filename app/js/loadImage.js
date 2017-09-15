export default function getImage (url) {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(url)
    }
    img.src = url
  })
}
