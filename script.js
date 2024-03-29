'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(longitude,latitude);
        const coord =[latitude, longitude];
    
        const map = L.map('map').setView(coord, 13);
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click',function(mapEvent){
       
        const { lat, lng} = mapEvent.latlng;

        L.marker([lat,lng]).addTo(map)
        .bindPopup(
            L.popup({
                maxWidth:250,
                minWidth:100,
                autoClose:false,
                closeOnClick:false
            }))
            .setPopupContent('Workout')
        .openPopup();
    })
     },
     function(){
         alert("could not get your position")
     })
}

