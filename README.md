# Weather App

A weather dashboard web application built with React and Redux.

## Live Demo

* [click here](https://viktorr16.sg-host.com/)

## Description

This project is a weather dashboard application that allows users to search for cities and view current weather conditions for those cities. It provides weather data such as temperature, weather condition, humidity, and wind speed.

Below you can find each file functionality and description:

AllCitiesWeather.jsx:

*Functionality: React component for displaying weather data for popular cities.
*Dependencies: React hooks, Redux hooks, "fetchWeatherForCity" helper, "uuid" library.
*Description: Fetches weather data for popular cities, renders CityCard components for each city, handles loading states, and displays weather information.

AllCities.test.js:

*Functionality: Test cases for the "AllCitiesWeather" component.
*Dependencies: React testing libraries, Redux, mock store.
*Description: Tests the rendering and behavior of the "AllCitiesWeather" component in loading and data-present states.

CityCard.jsx:

*Functionality: React component for displaying weather information for a single city.
*Dependencies: React, Redux, custom helper functions, weather icons.
*Description: Renders weather data for a city, including temperature, weather condition, and additional details. Provides an option to delete the city card.

CityCard.test.js:

*Functionality: Test cases for the "CityCard" component.
*Dependencies: React testing libraries, Redux, mock store.
*Description: Tests the rendering and behavior of the "CityCard" component, including handling city deletion.

SearchBar.jsx:

*Functionality: React component for searching and adding cities.
*Dependencies: React, Redux, "fetchWeatherForCity" helper, "react-toastify".
*Description: Provides a search input field to find and add cities. Displays city suggestions, handles input changes, and triggers weather data fetching.

SearchBar.test.jsx:

*Functionality: Test cases for the "SearchBar" component.
*Dependencies: React testing libraries, Redux, mock store.
*Description: Tests the rendering and behavior of the "SearchBar" component, including input changes and button clicks.

convertKelvinToCelcius.js:

*Functionality: Function to convert temperature from Kelvin to Celsius.
*Description: Converts a temperature value from Kelvin to Celsius and returns the rounded result.

fetchWeatherForCity.js:

*Functionality: Function for fetching weather data for a city and updating Redux store.
*Dependencies: Axios, Redux actions, error handling functions.
*Description: Fetches weather data for a city from an API, dispatches Redux actions for success and failure, and displays error notifications.

getErrorMessageFromStatusCode.js:

*Functionality: Function to get error messages from HTTP status codes.
*Description: Returns an error message based on the HTTP status code, useful for error handling in network requests.

weatherActions.js:

*Functionality: Redux action creators for weather-related actions.
*Description: Defines action creators for requesting, storing, and deleting weather data for cities.

weatherReducer.js:

*Functionality: Redux reducer for weather data state.
*Dependencies: Redux actions.
*Description: Manages the state for weather data, including handling loading, success, and failure states.

store.js:

*Functionality: Redux store configuration.
*Dependencies: Redux
*Description: Configures the Redux store with middleware and reducers.

data.js:

*Functionality: Data file containing city lists.
*Description: Defines arrays of cities used for autocompletion and lists of popular cities.

setupTests.js:

*Functionality: Configuration file for setting up testing environment.
*Dependencies: Testing libraries (Jest-DOM).
*Description: Configures the testing environment for Jest tests.



### Installing

* How to upload:
```
npm run build
```
* Upload the build folder on a server public_html folder

### Executing program

* How to run the program
```
npm start
```

## Acknowledgments


* Various Video Tutorials









 
