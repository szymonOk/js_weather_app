const input = document.querySelector('.container__search-input')
const btn = document.querySelector('.container__search-btn')
const error = document.querySelector('.container__error')
const cityName = document.querySelector('.container__city')
const statusImg = document.querySelector('.container__status-img')
const degrees = document.querySelector('.degrees')
const body = document.querySelector('body')
const main = document.querySelector('.container__main')
const line = document.querySelector('.container__status-line')
const arrow = document.querySelector('.arrow')

const API_LINK = 'https://api.openweathermap.org/data/2.5/forecast?q='
const API_COUNT = '&cnt=8'
const API_KEY = '&appid=3398394920a3ba1d4086e36266ddd263'
const API_UNITS = '&units=metric'

const handleWeather = () => {
	const cityIn = input.value
	const URL = `${API_LINK}${cityIn}${API_COUNT}${API_KEY}${API_UNITS}`

	fetch(URL)
		.then(res => res.json())
		.then(weatherData => {
			const cityApi = weatherData.city.name
			const tempApi = weatherData.list[0].main.temp
			const statusApi = weatherData.list[0].weather[0].id

			arrow.style.display = 'none'
			input.value = ''
			cityName.textContent = cityApi
			degrees.textContent = Math.floor(tempApi) + '°C'
			line.style.display = 'block'

			getStatus(statusApi)
			deleteData()
			openMain()
			getData(weatherData)

			error.textContent = ''
		})
		.catch(() => {
			error.textContent = 'Wpisz poprawną nazwę'
		})
}

const getStatus = statusApi => {
	if (statusApi >= 200 && statusApi < 300) {
		statusImg.setAttribute('src', './dist/img/storm.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi >= 300 && statusApi < 400) {
		statusImg.setAttribute('src', './dist/img/drizzle.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi >= 500 && statusApi < 600) {
		statusImg.setAttribute('src', './dist/img/rain.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi >= 600 && statusApi < 700) {
		statusImg.setAttribute('src', './dist/img/snow.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi >= 700 && statusApi < 800) {
		statusImg.setAttribute('src', './dist/img/mist.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi === 800) {
		statusImg.setAttribute('src', './dist/img/sun.png')
		statusImg.setAttribute('alt', 'weather status image')
	} else if (statusApi >= 800 && statusApi < 900) {
		statusImg.setAttribute('src', './dist/img/clouds.png')
		statusImg.setAttribute('alt', 'weather status image')
	}
}

const openMain = () => {
	body.style.height = '100%'
	main.style.display = 'grid'
}

const getData = weatherData => {
	for (let data of weatherData.list) {
		console.log(data)
		const time = data.dt_txt.slice(11, -3)
		const temp = Math.floor(data.main.temp)
		const dataField = document.createElement('div')
		dataField.classList.add('container__info')
		dataField.innerHTML = `<h3 class="container__info-head">${time}</h3><p class="container__info-body">${temp}°C</p>`

		main.append(dataField)
	}
}

const deleteData = () => {
	const data = document.getElementsByClassName('container__info')
	const newData = [...data]
	newData.forEach(el => el.remove())
}

const handleEnterKey = e => {
	if (e.key === 'Enter') {
		handleWeather()
	}
}

btn.addEventListener('click', handleWeather)
input.addEventListener('keyup', handleEnterKey)
