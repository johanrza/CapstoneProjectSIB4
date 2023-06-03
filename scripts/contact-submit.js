const scriptURL =
  'https://script.google.com/macros/s/AKfycbyMfxfyfjvHEebANinaHonXHQ1sJzEeM9TIONRXjkanMx3adUw6Lp8IYiFFxqv7M2ZMmw/exec';

const form = document.forms['submit-to-google-sheet'];
const alertSuccess = document.querySelector('#alert-successful'); // d-none
const alertUnsuccessful = document.querySelector('#alert-unsuccessful'); // d-none
const submitBtn = document.querySelector('#btn-submit'); // tidak ada d-none (tampil)
const loadingBtn = document.querySelector('#btn-loading'); // d-none

form.addEventListener('submit', (e) => {
  e.preventDefault();

  loadingBtn.classList.toggle('d-none');
  submitBtn.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      alertSuccess.classList.toggle('d-none');
      loadingBtn.classList.toggle('d-none');
      submitBtn.classList.toggle('d-none');

      form.reset();
    })

    .catch((error) => {
      alertUnsuccessful.classList.toggle('d-none');

      form.reset();
      console.error('Error!', error.message);
    });
});
