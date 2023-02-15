// Generated API key
var APIKey = "431d21e1e34ce72549c518a2addb442d";
// request link for API call
var tempQueryURL =
  "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;
// Update date and time
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

// Open Weather Functions & variables
var city;

function storeCity() {
  var city = document.getElementById("city-input").value;
  console.log(city); // Just for testing
  // Do something with the city variable, like sending it to a server or displaying it on the page
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // Do something with the data, like display it on the page
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

document.getElementById("submitButton").addEventListener("click", storeCity);

// Display the forecast from data from the API
function displayCurrentForecast(city, weather, timezone) {
    var tempF = weather.temp;
    var windMph = weather.wind_speed;
    var humidity = weather.humidity;
    var uvi = weather.uvi;
    var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    var iconDescription = weather.weather[0].description || weather[0].main;   
}

function updateWeatherData(weatherData) {
    // Update the current day's forecast
    document.getElementById("currentDay").textContent = weatherData.currentDay;
    document.getElementById("todayForecast").textContent = weatherData.todayForecast;
  
    // Update the weekly forecasts - Monday
    document.getElementById("date-monday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-monday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-monday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-monday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-monday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-monday").textContent = weatherData.weeklyForecasts[0].iconUrl;
  
    // Update the weekly forecasts - tuesday
    document.getElementById("date-tuesday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-tuesday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-tuesday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-tuesday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-tuesday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-tuesday").textContent = weatherData.weeklyForecasts[0].iconUrl;  
  
    // Update the weekly forecasts - wednesday
    document.getElementById("date-wednesday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-wednesday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-wednesday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-wednesday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-wednesday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-wednesday").textContent = weatherData.weeklyForecasts[0].iconUrl;
  
    // Update the weekly forecasts - thursday
    document.getElementById("date-thursday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-thursday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-thursday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-thursday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-thursday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-thursday").textContent = weatherData.weeklyForecasts[0].iconUrl;
  
    // Update the weekly forecasts - friday
    document.getElementById("date-friday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-friday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-friday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-friday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-friday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-friday").textContent = weatherData.weeklyForecasts[0].iconUrl;          

    // Update the weekly forecasts - saturday
    document.getElementById("date-saturday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-saturday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-saturday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-saturday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-saturday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-saturday").textContent = weatherData.weeklyForecasts[0].iconUrl;
  
    // Update the weekly forecasts - sunday
    document.getElementById("date-sunday").textContent = weatherData.weeklyForecasts[0].date;
    document.getElementById("tempF-sunday").textContent = weatherData.weeklyForecasts[0].tempF;
    document.getElementById("windMph-sunday").textContent = weatherData.weeklyForecasts[0].windMph;
    document.getElementById("humidity-sunday").textContent = weatherData.weeklyForecasts[0].humidity;
    document.getElementById("uvi-sunday").textContent = weatherData.weeklyForecasts[0].uvi;
    document.getElementById("iconUrl-sunday").textContent = weatherData.weeklyForecasts[0].iconUrl;
  }
  