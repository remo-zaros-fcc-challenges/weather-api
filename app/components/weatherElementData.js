export default function (data) {
  return `
    <h1 data-tempc="${data.main.temp}">temp: ${data.main.temp} &deg;C</h1>
    <p>${data.weather[0].description}</p>
    <p>${data.name}</p>
    <div>
      <p>wind: ${data.wind.speed}</p>
      <p>${data.wind.deg}</p>
    </div>`
}
