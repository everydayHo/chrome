const API_KEY = "225fbd1efd6b5c5255c61f6b5a831c6b";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then ((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
  });
}


function onGeoError(){
    alert("can't find you. No weather for you .");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

