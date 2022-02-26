const bodyEl = document.querySelector("body");
const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
buttonStopEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


buttonStartEl.addEventListener("click", () => {
    buttonStartEl.disabled = true;
    buttonStopEl.disabled = false;
    bodyEl.style.backgroundColor = getRandomHexColor();
     timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
});
buttonStopEl.addEventListener("click", () => {
    buttonStartEl.disabled = false;
    buttonStopEl.disabled = true;
    clearInterval(timerId);
    
 });
console.log(buttonStartEl);
console.log(buttonStopEl);
