var apiKey = "431d21e1e34ce72549c518a2addb442d";
var currentDayEl = $("#currentDay");
var currentDateEl = $("#currentDate");
var currentTimeEl = $("#currentTime");

function updateDateTime() {
  var now = moment();
  currentDayEl.text(now.format("dddd"));
  currentDateEl.text(now.format("MMM Do, YYYY"));
  currentTimeEl.text(now.format("h:mm:ss A"));
}
var currentHour = moment().hours();
setInterval(function () {
  var now = moment();
  currentDayEl.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

updateDateTime();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

var city;

function storeCity() {
  var city = document.getElementById("city-input").value;
  console.log(city); // Just for testing
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apiKey;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("weatherData", JSON.stringify(data));
    })
    .catch((error) => {
      console.error(error);
    });
}
document.getElementById("submitButton").addEventListener("click", storeCity);

const cityInput = document.getElementById("city-input");
const submitBtn = document.getElementById("submitButton");
const forecastTable = document.getElementById("forecast-table");
const inputtedCityEl = document.getElementById("inputted-city");

function renderWeatherData(data) {
  inputtedCityEl.textContent = data.city.name;
  forecastTable.innerHTML = "";
  for (let i = 0; i < data.list.length; i += 8) { // get data for every 24 hours (i.e., every 8 items in the array)
    const date = new Date(data.list[i].dt * 1000);
    const tempF = (data.list[i].main.temp - 273.15) * 1.8 + 32;
    const windMph = data.list[i].wind.speed;
    const humidity = data.list[i].main.humidity;
    const uvi = data.list[i].uvi;
    const iconUrl = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
    const forecastRow = document.createElement("tr");
    forecastRow.innerHTML = `
      <td>${date.toDateString()}</td>
      <td><img src="${iconUrl}" alt="Weather icon"></td>
      <td>${tempF.toFixed(1)}°F</td>
      <td>${windMph} mph</td>
      <td>${humidity}%</td>
      <td>${uvi}</td>
    `;
    forecastTable.appendChild(forecastRow);
  }
}

submitBtn.addEventListener("click", () => {
  const city = cityInput.value;
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("weatherData", JSON.stringify(data));
      renderWeatherData(data);
    })
    .catch(error => {
      console.log(error);
    });
});

// Load weather data from local storage if available
const weatherData = JSON.parse(localStorage.getItem("weatherData"));
if (weatherData) {
  renderWeatherData(weatherData);
}
