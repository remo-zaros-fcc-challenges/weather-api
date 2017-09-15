import loadImage from '../js/loadImage'

export default async function (data) {
  const wallpaper = await loadImage('../assets/wallpaper/image.jpg')
  return wallpaper.getAttribute('src')
}
