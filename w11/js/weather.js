const weatherInput = document.querySelector('.weatherInput')
const weatherBtn = document.querySelector('.weatherBtn')
const cityName = document.querySelector('.cityName')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=fddef5f931ee2f165ad2fe5fe4ac4f1e'
const API_UNITS = '&units=metric'
cityName.textContent = 'Type Town'

const getWeather = () => {
    const city = weatherInput.value
    const URL = API_LINK + city + API_KEY + API_UNITS


    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const statuss = res.data.weather[0]

        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = hum + "%"
        weather.textContent = statuss.main

        warning.textContent = ''
        weatherInput.value = ''

    })
}


const enterChek = e => {
    if (e.key === 'Enter') {
        getWeather()
    }
}

console.log('siema jak to czytasz to fajnie XD');

weatherBtn.addEventListener('click', getWeather)
weatherInput.addEventListener('keyup', enterChek)
