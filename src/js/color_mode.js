const switchBtn = document.querySelector('.switch');
const switchInside = document.querySelector('.switch-inside');
const body = document.querySelector('body');
const header = document.querySelector('.container__header');
const arrow = document.querySelector('.arrow');

const mode = localStorage.getItem('mode');

const changeMode = () => {
  if (body.dataset.mode === 'light') {
    body.dataset.mode = 'dark';
    switchInside.classList.add('switch-active');
    header.style.backgroundImage = "url('./dist/img/night.jpg')";
    arrow.setAttribute('src', './dist/img/arrow-down-dark.svg');
    localStorage.setItem('mode', 'dark');
  } else {
    body.dataset.mode = 'light';
    switchInside.classList.remove('switch-active');
    header.style.backgroundImage = "url('./dist/img/day.jpg')";
    arrow.setAttribute('src', './dist/img/arrow-down-light.svg');
    localStorage.setItem('mode', 'light');
  }
};

const checkMode = () => {
  if (mode === 'dark') {
    changeMode();
  }
};

window.addEventListener('DOMContentLoaded', checkMode);
switchBtn.addEventListener('click', changeMode);
