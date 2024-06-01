import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const selectors = {
  startBtn: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let countdownInterval;
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
      selectors.startBtn.disabled = true;
    } else {
      selectors.startBtn.disabled = false;
    }
  },
};

flatpickr(selectors.input, options);

selectors.startBtn.addEventListener('click', () => {
  startCountdown();
});

function startCountdown() {
  if (selectedDate && selectedDate > new Date()) {
    selectors.startBtn.disabled = true;
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = selectedDate - now;
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        iziToast.success({
          title: "Success",
          message: "Countdown finished",
        });
        updateTimerDisplay(0);
        selectors.startBtn.disabled = false;
      } else {
        updateTimerDisplay(timeRemaining);
      }
    }, 1000);
  }
}

function updateTimerDisplay(ms) {
  const time = convertMs(ms);
  selectors.days.textContent = addLeadingZero(time.days);
  selectors.hours.textContent = addLeadingZero(time.hours);
  selectors.minutes.textContent = addLeadingZero(time.minutes);
  selectors.seconds.textContent = addLeadingZero(time.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
