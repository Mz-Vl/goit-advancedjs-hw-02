const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  if (startBtn.disabled) {
    return;
  }
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
});


stopBtn.addEventListener('click', () => {
  if (stopBtn.disabled) {
    return;
  }
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}