import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Import the mock store creator
import AllCitiesWeather from "./AllCitiesWeather";
import store from "../../redux/store";

// Create a mock store
const mockStore = configureStore([]);
global.fetch = jest.fn();
describe("AllCitiesWeather Component", () => {
  beforeEach(() => {
    // Reset the fetch mock before each test
    fetch.mockReset();
  });

  it("should render the component with loading state", async () => {
    // Mock the response for the loading state
    fetch.mockResolvedValueOnce({
      json: async () => ({
        // Simulate loading data
      }),
    });

    render(
      <Provider store={store}>
        <AllCitiesWeather />
      </Provider>
    );

    // Use waitFor to wait for the loading element to appear
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
  it("should render the component with weather data", () => {
    // Create a mock state with weather data
    const mockState = {
      weather: {
        cities: [
          {
            name: "London",
            loading: false,
            data: {
              // Mock weather data properties
              name: "London",
              main: {
                temp: 20, // Replace with the actual data
                temp_max: 25,
                temp_min: 15,
                feels_like: 21,
              },
              weather: [
                {
                  main: "Clear",
                  icon: "01d",
                },
              ],
              wind: {
                speed: 5,
              },
              id: 2643743,
            },
          },
          // Add more city objects as needed
        ],
      },
    };

    // Initialize the store with the mock state
    const store = mockStore(mockState);

    render(
      <Provider store={store}>
        <AllCitiesWeather />
      </Provider>
    );

    
    expect(screen.getByText("London")).toBeInTheDocument();
   
  });
});
