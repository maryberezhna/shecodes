let time = new Date();
var hour = time.getHours();
var minutes = time.getMinutes();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = days[time.getDay()];

function showTime() {
  return day + ", " + hour + ":" + minutes;
}

let placeTime = document.querySelector(".currentTime");
placeTime.innerHTML = showTime(time);

//  it should display the name of the city on the result page and the current temperature of the city.

function showTemperatura(response) {
  let temperature = Math.round(response.data.main.temp);
  let degree = document.querySelector("#weather");
  let cityupdated = document.querySelector("#city");
  degree.innerHTML = temperature + "°C";
  cityupdated.innerHTML = response.data.name;
}

let apiKey = "a3b94ee5a0cbfd0dbf31cf8132624cce";
let units = "metric";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

let form = document.querySelector("#form");
let submitButton = document.querySelector("#submit-button");

function changeCity(event) {
  event.preventDefault();
  let search = document.querySelector("#input");
  let city = document.querySelector("#city");
  city = search.value.toLowerCase();
  console.log(city);
  axios
    .get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units,
      },
    })
    .then(showTemperatura);
}

form.addEventListener("submit", changeCity);
submitButton.addEventListener("click", changeCity);
// Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.
function showPosition(response) {
  let temp = Math.round(response.data.main.temp);
  let cityPositon = document.querySelector("#city");
  cityPositon.innerHTML = `The temp is ${temp}°C in ${response.data.name}`;
}

function knowLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showPosition);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(knowLocation);
}

let buttonLocation = document.querySelector("#button");
buttonLocation.addEventListener("click", getCurrentPosition);
