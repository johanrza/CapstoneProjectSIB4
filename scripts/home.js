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

function showWeather() {
  document.getElementById('weather-widget').style.display = "block";
}
function hideWeather() {
  document.getElementById('weather-widget').style.display = "none";
}


// Maps

var map = L.map("map").setView([-3.200000, 118.816666], 5);
    map.zoomControl.remove();
    let layerGroup = L.layerGroup().addTo(map);
    L.tileLayer("https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(map);
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    let icon = L.divIcon({
      className: "custom-div-icon",
      html: `<i class="fas fa-map-marker-alt marker-pin"></i>`,
      iconSize: [30, 33],
      iconAnchor: [15, 42],
      popupAnchor: [0, -40],
    });

    fetch(`https://nominatim.openstreetmap.org/search.php?country=Indonesia&polygon_geojson=1&format=jsonv2`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        geojsonFeature = json[0].geojson;
        var layer = L.geoJSON(geojsonFeature, {
          style: {
            weight: 2,
            opacity: 1,
            color: "#2d3436",
            fillColor: "#74b9ff",
            fillOpacity: 0.2,
          }
        }).addTo(map);
      });


    if (layerGroup !== null) {
      layerGroup.clearLayers();
    }
    let marker = null;
    for (let d of data_indonesia) {
      let latitude = d.lat;
      let longitude = d.long;
      let name = d.kabko
      if (
        latitude != null &&
        longitude != null &&
        (latitude !== "-" || longitude !== "-")
      ) {
        marker = L.marker([latitude, longitude], {
          icon: icon,
        }).addTo(layerGroup);
        marker.bindPopup(` <h5 class="card-title" style="font-size:16px; font-weight:bolder; padding:2px">` + name + `</h5>`);
      }
    }