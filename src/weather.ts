const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=625143&appid=438826d17bf3b8ee4e5d95a8f1d1f416';


const btn = document.querySelector('button')
const cityName = document.querySelector('.city__name')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.description')
const windSpeed = document.querySelector('.windSpeed')


function weatherRequest(method: string, url:string) {
    return fetch(url).then(response => {
        return response.json();
    })
}

btn.addEventListener('click', () => {
    weatherRequest('GET', urlWeather)
    .then(data => {
        cityName.textContent = data.name
        temperature.innerHTML = Math.floor(data.main.temp - 273) + '&deg;'
        weatherDescription.textContent = data.weather[0].description
        windSpeed.textContent = data.wind.speed
    })
})