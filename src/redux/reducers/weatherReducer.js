import {
  FETCH_CITY_WEATHER_REQUEST,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_FAILURE,
  DELETE_CITY,
} from "../actions/weatherActions";

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER_REQUEST:
      // When a request for weather data is initiated, add the city to the state with loading status
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            name: action.payload, // The city name from the action payload
            loading: true, // Indicate that data is being fetched
            data: null, // Set data to null initially
            error: null, // Clear any previous error
          },
        ],
      };
    case FETCH_CITY_WEATHER_SUCCESS:
      // When weather data retrieval is successful, update the city's data in the state
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.name === action.payload.city
            ? { ...city, loading: false, data: action.payload.data }
            : city
        ),
      };
    case FETCH_CITY_WEATHER_FAILURE:
      // When an error occurs during data retrieval, update the city's error status in the state
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.name === action.payload.city
            ? { ...city, loading: false, error: action.payload.error }
            : city
        ),
      };
    case DELETE_CITY:
      // When a city is deleted, filter out the city to be removed from the state
      const cityIdToDelete = action.payload;

      const filteredCities = state.cities.filter(
        (city) => city.data.id !== cityIdToDelete
      );

      return {
        ...state,
        cities: filteredCities, // Update the state with the filtered cities
      };
    default:
      return state;
  }
};

export default weatherReducer;
