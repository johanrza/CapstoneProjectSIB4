const loader = () => {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
};

const date = () => {
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const currentDateString = currentDate.toLocaleDateString('id-ID', options);
  document.getElementById('current-date').innerHTML = currentDateString;
};

const tooltip = () => {
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  loader();
  date();
  tooltip();
});
