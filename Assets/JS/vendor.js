navigator.geolocation.getCurrentPosition(function(position){
   const coordinates = position.coords;
   let {latitude,longitude} = coordinates;
   console.log(`${latitude} and ${longitude}`)
},function(){

});


let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(map);
console.log(L);