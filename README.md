# 06_Dirt_Sniffer5000
That's no moon, that's a space station! The days of sniffin' the dirt are over. Weather apps these days are in it for the money, not the science. All quotes are either a reference to the classic movies, "Twister" or "Mean Girls".
The Dirt Sniffer 5000 uses the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities and uses users' `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

The Background dynamically shifts gradients depending on the time of day. 

![The webpage includes an input field to insert a city name, and three containers with today's weather, the following four days weather forecast, and users search history.](./assets/images/Screen%20Shot%202023-02-16%20at%202.44.50%20AM.png).

Visit GitHub Repo:
[Dirt Sniffer 5000 Repository](https://github.com/nigelarue/06_Dirt_Sniffer5000).
Visit Live URL:
[Live Webpage](https://nigelarue.github.io/06_Dirt_Sniffer5000/).
# Issues

The API version we were told to use is deprecated and I could not get the UV index to return data properly. As a result I created a dynamic background that should shift gradients depending on the time of day to try to make up for this missing technicality criteria. 
[UV Deprecated](./assets/images/Screen%20Shot%202023-02-16%20at%202.24.40%20AM.png).
# Example of one of 5 color options for the background given the user's location:

![Background at nighttime](./assets/images/Screen%20Shot%202023-02-16%20at%202.46.10%20AM.png).
![Background during twilight](./assets/images/Screen%20Shot%202023-02-16%20at%204.49.41%20AM.png).
![Twilight Gradient](./assets/images/Screen%20Shot%202023-02-16%20at%204.52.32%20AM.png).
![Morning Gradient](./assets/images/Screen%20Shot%202023-02-16%20at%208.55.47%20AM.png).


# Given User Story 

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

# Given Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```