function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorSwitcher() {
  startButton.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorSwitcher() {
  startButton.disabled = false;
  clearInterval(intervalId);
}
