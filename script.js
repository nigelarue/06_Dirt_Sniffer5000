var apiKey = "431d21e1e34ce72549c518a2addb442d";
var currentDayEl = $("#currentDay");
var currentDateEl = $("#currentDate");
var currentTimeEl = $("#currentTime");
var bodyEl = $("body");

function updateDateTime() {
  var now = moment();
  var currentHour = now.hours();

  currentDayEl.text(now.format("dddd"));
  currentDateEl.text(now.format("MMM Do, YYYY"));
  currentTimeEl.text(now.format("h:mm:ss A"));

  if (currentHour >= 18) {
    bodyEl.addClass("dusk");
  } else {
    bodyEl.removeClass("dusk");
  }
  if (currentHour >= 20 || currentHour < 4) {
    bodyEl.addClass("night");
  } else {
    bodyEl.removeClass("night");
  }
  if (currentHour >= 4 && currentHour < 6) {
    bodyEl.addClass("twilight");
  } else {
    bodyEl.removeClass("twilight");
  }
  if (currentHour >= 6 && currentHour < 11) {
    bodyEl.addClass("morning");
  } else {
    bodyEl.removeClass("morning");
  }
  if (currentHour >= 11 && currentHour < 18) {
    bodyEl.addClass("daytime");
  } else {
    bodyEl.removeClass("daytime");
  }
}

setInterval(function () {
  updateDateTime();
}, 1000);

updateDateTime();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));


setInterval(function () {
  var now = moment();
  currentDayEl.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

updateDateTime();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

var city;
// Storing user City inputs
function storeCity() {
  var city = document.getElementById("city-input").value;
  console.log(city);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    city +
    "&appid=" +
    apiKey;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("weatherData", JSON.stringify(data));
      var searchHistory =
        JSON.parse(localStorage.getItem("searchHistory")) || [];
      if (!searchHistory.includes(city)) {
        searchHistory.push(city);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        renderSearchHistory();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

document.getElementById("submitButton").addEventListener("click", storeCity);

// Function to display the weather data from the API fetch into an HTML Table.
const cityInput = document.getElementById("city-input");
const submitBtn = document.getElementById("submitButton");
const forecastTable = document.getElementById("forecast-table");
const inputtedCityEl = document.getElementById("inputted-city");

function renderWeatherData(data) {
  inputtedCityEl.textContent = data.city.name;
  forecastTable.innerHTML = "";
  const today = new Date(data.list[0].dt * 1000);
  const todayTempF = (data.list[0].main.temp - 273.15) * 1.8 + 32;
  const todayWindMph = data.list[0].wind.speed;
  const todayHumidity = data.list[0].main.humidity;
  const todayUvi = data.list[0].uvi;
  const todayIconUrl = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;

  // Render current day info
  const currentDayEl = document.getElementById("currentDay");
  currentDayEl.textContent = today.toDateString();
  const iconUrlEl = document.getElementById("iconUrl");
  iconUrlEl.innerHTML = `<img src="${todayIconUrl}" alt="Weather icon">`;
  const tempFEl = document.getElementById("tempF");
  tempFEl.textContent = `${todayTempF.toFixed(1)}°F `;
  const windMphEl = document.getElementById("windMph");
  windMphEl.textContent = `${todayWindMph} mph`;
  const humidityEl = document.getElementById("humidity");
  humidityEl.textContent = `${todayHumidity}%`;
  const uviEl = document.getElementById("uvi");
  uviEl.textContent = `${todayUvi}`;

  // Render forecast table
  for (let i = 0; i < 5; i++) {
    const date = new Date(data.list[i*8].dt * 1000);
    const tempF = (data.list[i*8].main.temp - 273.15) * 1.8 + 32;
    const windMph = data.list[i*8].wind.speed;
    const humidity = data.list[i*8].main.humidity;
    const uvi = data.list[i*8].uvi;
    const iconUrl = `https://openweathermap.org/img/wn/${data.list[i*8].weather[0].icon}.png`;
    const forecastRow = document.createElement("tr");
    forecastRow.innerHTML = `
        <td>${date.toDateString()} </td>
        <td><img src="${iconUrl}" alt="Weather icon"></td>
        <td>${tempF.toFixed(1)}°F </td>
        <td>${windMph} mph </td>
        <td>${humidity} % </td>
        <td>${uvi}</td>
      `;
    forecastTable.appendChild(forecastRow);
  }
}


// Submit button event listener
submitBtn.addEventListener("click", () => {
  const city = cityInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("weatherData", JSON.stringify(data));
      renderWeatherData(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Load weather data from local storage if available
if (localStorage.getItem("weatherData")) {
    const storedData = JSON.parse(localStorage.getItem("weatherData"));
    renderWeatherData(storedData);
}
// Search History
function renderSearchHistory() {
  var searchHistoryEl = document.getElementById("search-history");
  searchHistoryEl.innerHTML = "";
  var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  for (var i = 0; i < searchHistory.length; i++) {
    var city = searchHistory[i];
    var searchHistoryItemEl = document.createElement("button");
    searchHistoryItemEl.textContent = city;
    searchHistoryItemEl.classList.add("search-history-item");
    searchHistoryItemEl.addEventListener("click", function () {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("weatherData", JSON.stringify(data));
          renderWeatherData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    searchHistoryEl.appendChild(searchHistoryItemEl);
  }
}

renderSearchHistory();
