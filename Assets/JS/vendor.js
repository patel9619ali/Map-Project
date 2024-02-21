let formButton = document.getElementById("form__btn");
const form = document.getElementById('myForm');
let formWrapper = document.querySelector(".form-wrapper");
let optionsType = document.querySelector(".form__input--type");
let formDistance = document.querySelector(".form__input--distance");
let formDuration = document.querySelector(".form__input--duration");
let formSteps = document.querySelector(".form__input--steps");
let elevation = document.querySelector(".elevation");
let steps = document.querySelector(".steps");
let formElevation = document.querySelector(".form__input--elevation");
let listAllWrapper = document.querySelector(".list_all_wrapper");
let map,mapEvent;
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

map.on('click', function(mapE) {    
  // Position on click
  mapEvent = mapE;
  formWrapper.classList.remove('hide');
  formDistance.focus();
})
form.addEventListener('submit',function(e){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = months[currentMonthIndex];
    let yearDayTime = `${currentDate.getDate()}-${currentMonthIndex+1}-${currentDate.getFullYear()} ${currentDate.getHours()}h ${currentDate.getMinutes()}m ${currentDate.getSeconds()}s`;
    e.preventDefault();
    formWrapper.classList.add('hide');
    console.log(`${formDistance.value} formDistance= ${formDuration.value} formDuration= ${formElevation.value} formElevation= ${formSteps.value} formSteps=`)
    let clickPosition = [mapEvent.latlng.lat, mapEvent.latlng.lng];
    let optionsTypeValue = optionsType.value;
    console.log(optionsTypeValue)
    L.marker(clickPosition).addTo(map)
    .bindPopup(L.popup({content: `🏃‍♂️ ${optionsTypeValue} on ${yearDayTime}`,
    autoClose: false,
    className: 'popup_customize',
})).openPopup();
let workOut = '';
let calulationForKilometerHour = formDistance.value/(formDuration.value/60);
let calulationForKilometerMin = formDistance.value/formDuration.value;
let speedFormattedKilometerMin = calulationForKilometerMin.toFixed(1);
let speedFormattedKilometerHrs = calulationForKilometerHour.toFixed(1);
    if(optionsTypeValue == 'Running'){
       workOut = `<li class="workout workout--running">
       <h2 class="workout__title">${optionsTypeValue} on ${currentDate.getDate()} ${currentMonthName}</h2>
       <div class="all_workouts">
         <div class="workout__details m-0">
           <span class="workout__icon">🏃‍♂️</span>
           <span class="workout__value">${formDistance.value}</span>
           <span class="workout__unit">km</span>
         </div>
         <div class="workout__details">
           <span class="workout__icon">⏱</span>
           <span class="workout__value">${formDuration.value}</span>
           <span class="workout__unit">min</span>
         </div>      
         <div class="workout__details">
           <span class="workout__icon">⚡️</span>
           <span class="workout__value">${speedFormattedKilometerMin}</span>
           <span class="workout__unit">min/km</span>
         </div>
         <div class="workout__details">
           <span class="workout__icon">🦶🏼</span>
           <span class="workout__value">${formSteps.value}</span>
           <span class="workout__unit">spm</span>
         </div>
       </div>
     </li>`
    }
    else{
     workOut = ` <li class="workout workout--cycling">
     <h2 class="workout__title">${optionsTypeValue} on ${currentDate.getDate()} ${currentMonthName}</h2>
     <div class="all_workouts">
       <div class="workout__details m-0">
         <span class="workout__icon">🚴‍♀️</span>
         <span class="workout__value">${formDistance.value}</span>
         <span class="workout__unit">km</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">⏱</span>
         <span class="workout__value">${formDuration.value}</span>
         <span class="workout__unit">min</span>
       </div>
   
       <div class="workout__details">
         <span class="workout__icon">⚡️</span>
         <span class="workout__value">${speedFormattedKilometerHrs}</span>
         <span class="workout__unit">km/h</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">⛰</span>
         <span class="workout__value">${formElevation.value}</span>
         <span class="workout__unit">m</span>
       </div>
     </div>
   </li>
     `
    }
    listAllWrapper.innerHTML += workOut;
    formDistance.value = formDuration.value = formElevation.value = formSteps.value = '';
})
optionsType.addEventListener('change',function(){
    elevation.classList.toggle('row__hidden');
    steps.classList.toggle('row__hidden');
})
});



let abc = document.querySelectorAll('.destination_city__17aXz');
console.log(abc);
for (let i = 0; i < abc.length; i++) {
  const element = abc[i];
  // console.log(element);
  console.log(element.innerHTML)
  console.log(element.href);
}