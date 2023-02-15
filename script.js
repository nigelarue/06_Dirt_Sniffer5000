// Generated API key
var APIKey = "431d21e1e34ce72549c518a2addb442d";
// request link for API call
var tempQueryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
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
    var city = document.getElementById('city-input').value;
    console.log(city); // Just for testing
    // Do something with the city variable, like sending it to a server or displaying it on the page
  }
  
  document.getElementById('submitButton').addEventListener('click', storeCity);
  
