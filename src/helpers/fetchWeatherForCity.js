import axios from "axios";
import {
  fetchCityWeatherFailure,
  fetchCityWeatherRequest,
  fetchCityWeatherSuccess,
} from "../redux/actions/weatherActions";
import { getErrorMessageFromStatusCode } from "./getErrorMessageFromStatusCode";
import { toast } from "react-toastify";

/**
 * Fetch weather data for a given city and update the Redux store.
 *
 *  city - The name of the city to fetch weather data for.
 *  dispatch - The Redux dispatch function to dispatch actions.
 *  showError - Whether to display error notifications (optional).
 */
export const fetchWeatherForCity = async (
  city,
  dispatch,
  showError = false
) => {
  // Dispatch an action to indicate that weather data retrieval for the city has started
  dispatch(fetchCityWeatherRequest(city));
  try {
    // Fetch weather data from the OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}` // Api key stored in .env.local 
    );
    // Dispatch a success action with the retrieved data
    dispatch(fetchCityWeatherSuccess(city, response.data));
  } catch (error) {
    // Dispatch a failure action with the error message
    dispatch(fetchCityWeatherFailure(city, error.message));
    if (showError) {
      // Display a toast notification with the error message (if showError is true)
      const errorMessage = getErrorMessageFromStatusCode(
        error.response?.status || 500
      );
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 1500,
        theme: "colored",
      });
    }
  }
};
