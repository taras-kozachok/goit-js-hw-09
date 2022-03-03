//const inputFirstDeleyEl = document.querySelector('input[name="delay"]');
//const inputDeleyStepEl = document.querySelector('input[name="step"]');
//const inputAmountEl = document.querySelector('input[name="amount"]');
//const buttonCreatEl = document.querySelector('button[type="submit"]');
const formEl = document.querySelector('.form');

//console.log(formEl);

formEl.addEventListener("submit", onFormElSubmit);
 function onFormElSubmit(event) {
    event.preventDefault();
   const formElements = event.currentTarget.elements;
   
   const delay = formElements.delay.value;
   const step = formElements.step.value;
   const amount = formElements.amount.value;
   console.log(delay);
  console.log(step);
   console.log(amount);
   

  
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject 
  }
}

createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });



