import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startColorSwitcher);
stopBtn.addEventListener('click', stopColorSwitcher);


let intervalId;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorSwitcher() {
  startBtn.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorSwitcher() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

