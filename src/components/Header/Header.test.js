import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Header Component", () => {
  it("should render the Header component with logo and title", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Check if the logo is present
    const logoElement = screen.getByAltText("WeatherSearch");
    expect(logoElement).toBeInTheDocument();

    // Check if the title text is present
    const titleElement = screen.getByText("WeatherSearch");
    expect(titleElement).toBeInTheDocument();
  });
});
