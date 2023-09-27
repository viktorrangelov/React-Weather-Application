// Action Types
export const FETCH_CITY_WEATHER_REQUEST = "FETCH_CITY_WEATHER_REQUEST";
export const FETCH_CITY_WEATHER_SUCCESS = "FETCH_CITY_WEATHER_SUCCESS";
export const FETCH_CITY_WEATHER_FAILURE = "FETCH_CITY_WEATHER_FAILURE";
export const DELETE_CITY = "DELETE_CITY";

// Action Creators

// Action to request weather data for a city
export const fetchCityWeatherRequest = (city) => ({
  type: FETCH_CITY_WEATHER_REQUEST,
  payload: city, // The city name for which weather data is requested
});

// Action to store successful weather data retrieval for a city
export const fetchCityWeatherSuccess = (city, data) => ({
  type: FETCH_CITY_WEATHER_SUCCESS,
  payload: { city, data }, // The city name and the weather data
});

// Action to store failure/error when fetching weather data for a city
export const fetchCityWeatherFailure = (city, error) => ({
  type: FETCH_CITY_WEATHER_FAILURE,
  payload: { city, error }, // The city name and the error message
});

// Action to delete a city from the state
export const deleteCity = (cityId) => {
  return {
    type: DELETE_CITY,
    payload: cityId, // The unique identifier of the city to be deleted
  };
};
