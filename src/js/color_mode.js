const switchBtn = document.querySelector('.switch')
const switchInside = document.querySelector('.switch-inside')
const body = document.querySelector('body')
const header = document.querySelector('.container__header')

let mode = localStorage.getItem('mode')

const checkMode = () => {
	if (mode === 'dark') {
		body.dataset.mode === 'dark'
		changeMode()
	}
}

const changeMode = () => {
	if (body.dataset.mode === 'light') {
		body.dataset.mode = 'dark'
		switchInside.classList.add('switch-active')
		header.style.backgroundImage = "url('./dist/img/night.jpg')"
		localStorage.setItem('mode', 'dark')
	} else {
		body.dataset.mode = 'light'
		switchInside.classList.remove('switch-active')
		header.style.backgroundImage = "url('./dist/img/day.jpg')"
		localStorage.setItem('mode', 'light')
	}
}

window.addEventListener('DOMContentLoaded', checkMode)
switchBtn.addEventListener('click', changeMode)
