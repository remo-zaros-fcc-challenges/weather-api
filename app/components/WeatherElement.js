export function weatherElement (data) {
  const container = document.createElement('div')
  container.innerHTML = `${data.main.temp}&deg;C`
  return container
}
