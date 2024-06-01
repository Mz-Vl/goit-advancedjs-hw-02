import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = Number(this.elements.delay.value);
  const step = Number(this.elements.step.value);
  const amount = Number(this.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    const currentDelay = delay + (i - 1) * step;
    createPromise(i, currentDelay)
      // .then(({ position, delay }) => {
      //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // })
      // .catch(({ position, delay }) => {
      //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      // });
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
});