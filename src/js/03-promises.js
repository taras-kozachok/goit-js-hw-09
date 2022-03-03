import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener("submit", onFormElSubmit);
 function onFormElSubmit(event) {
   event.preventDefault();
   const formElements = event.currentTarget.elements;
   let calcStep = 0;
   const delay = parseInt(formElements.delay.value);
   const step = parseInt(formElements.step.value);
   const amount = parseInt(formElements.amount.value);
   calcStep = delay;
   for (let i = 0; i < amount; i++)
   {
     createProm((i + 1), calcStep);
     calcStep += step;
   };   
};

const createPromise = (pos, delayProm) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let dataReturn = {position: 0,
                         delay: 0
    }; 
    dataReturn.position = pos;
    dataReturn.delay = delayProm;
    setTimeout(() => {
      if (shouldResolve) {
        
        resolve(dataReturn);
      }

      reject(dataReturn);
    }, delayProm);
  });
};

function createProm(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
     // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}







