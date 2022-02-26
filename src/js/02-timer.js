// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const buttonStartEl = document.querySelector('button[data-start]');
const spanDaysEl = document.querySelector('span[data-days]');
const spanHoursEl = document.querySelector('span[data-hours]');
const spanMinutesEl = document.querySelector('span[data-minutes]');
const spanSecondsEl = document.querySelector('span[data-seconds]');

buttonStartEl.disabled = true;
let dateEnd = 0;
let dateBegin = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dateEnd = new Date().getTime();
        dateBegin = (selectedDates[0]).getTime();
      console.log(selectedDates[0]);
      if ((dateBegin) > (dateEnd)) {
          buttonStartEl.disabled = false;
           }
      else {
        buttonStartEl.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
         };
  }
};

const myInput = document.querySelector('#datetime-picker');
const fp = flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
   return String(value).padStart(2, "0");
}

buttonStartEl.addEventListener("click", () => {
  buttonStartEl.disabled = true;
 const timerId = setInterval(() => {
    dateBegin -= 1000;
    const arrayDateTime = convertMs(dateBegin-dateEnd);
    spanDaysEl.textContent = addLeadingZero(arrayDateTime.days);
    spanHoursEl.textContent = addLeadingZero(arrayDateTime.hours);
    spanMinutesEl.textContent = addLeadingZero(arrayDateTime.minutes);
    spanSecondsEl.textContent = addLeadingZero(arrayDateTime.seconds);
    }, 1000);
 });