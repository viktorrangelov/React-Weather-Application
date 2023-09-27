import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CityCard from "./CityCard";

// Create a mock store
const mockStore = configureStore([]);

describe("CityCard Component", () => {
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
        ],
      },
    };

    // Initialize the store with the mock state
    const store = mockStore(mockState);

    render(
      <Provider store={store}>
        <CityCard
          name="London"
          main={mockState.weather.cities[0].data.main}
          weather={mockState.weather.cities[0].data.weather}
          wind={mockState.weather.cities[0].data.wind}
          id="city-1"
        />
      </Provider>
    );

    // You can use assertions to check if weather data is present
    expect(screen.getByText("London")).toBeInTheDocument();
    
  });
});
