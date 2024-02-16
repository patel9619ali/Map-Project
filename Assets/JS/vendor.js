let formWrapper = document.querySelector(".form");
// let formInput = document.querySelector(".form__input--distance");
let map;
navigator.geolocation.getCurrentPosition(function(position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordinate = [latitude, longitude];
 map = L.map('map', {
    center: coordinate,
    zoom: 100
});

// On load function
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(mapEvent) {    
  // Position on click
  let clickPosition = [mapEvent.latlng.lat, mapEvent.latlng.lng];
  L.marker(clickPosition).addTo(map)
  .bindPopup(L.popup({content: 'Nice workout',
  autoClose: false,
  className: 'popup_customize',
  })).openPopup();
  //   append div
  let formControl = `<form class="row align-items-center py-4 form_control_wrapper">
    <div class="form__row col-md-6 mb-3">
      <label class="form__label">Type</label>
      <select class="form__input form__input--type">
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
      </select>
    </div>
    <div class="form__row col-md-6 mb-3">
      <label class="form__label">Distance</label>
      <input class="form__input form__input--distance" placeholder="km">
    </div>
    <div class="form__row col-md-6 mb-3">
      <label class="form__label">Duration</label>
      <input class="form__input form__input--duration" placeholder="min">
    </div>
    <div class="form__row col-md-6 mb-3">
      <label class="form__label">Elev Gain</label>
      <input class="form__input form__input--elevation" placeholder="meters">
    </div>
    <button class="form__btn d-none">OK</button>
  </form>`;
  formWrapper.innerHTML += formControl;
  if (inputField) {
      console.log(inputField)
      inputField.focus();
    }
})
});
    let inputField = document.querySelector('.form__input--distance');
    inputField.focus();


