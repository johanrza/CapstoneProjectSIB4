const apiKey = 'YOUR_API_KEY';

const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const errorMessageElement = document.getElementById('error-message');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        )
        .then((response) => {
          const data = response.data;
          cityElement.innerText = data.name;
          temperatureElement.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup>`;
          descriptionElement.innerText = data.weather[0].description;
          const iconCode = data.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          weatherIconElement.src = iconUrl;
          errorMessageElement.classList.add('d-none');
        })
        .catch((error) => {
          console.error(error);
          weatherIconElement.classList.add('d-none');
          errorMessageElement.innerText = 'Failed to fetch weather data.';
        });
    },
    (error) => {
      console.error(error);
      weatherIconElement.classList.add('d-none');
      errorMessageElement.innerText = 'Please allow location access \n to fetch weather data.';

    }
  );
} else {
  alert('Geolocation is not supported by this browser.');
}
