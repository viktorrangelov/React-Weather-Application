import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchBar from "./SearchBar";
import store from "../../redux/store";

// Create a mock store with an initial state if needed
// const store = mockStore({
//   cities: [],
// });

// Wrap your component with the Provider and mock store
const renderComponent = () =>
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

describe("SearchBar Component", () => {
  it("renders without errors", () => {
    renderComponent();
  });

  it("handles input change correctly", () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText("Search for a city...");

    fireEvent.change(inputElement, { target: { value: "London" } });

    expect(inputElement.value).toBe("London");
  });

  it("handles button click correctly", () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText("Search for a city...");
    const buttonElement = screen.getByRole("button", { name: "Search" });

    fireEvent.change(inputElement, { target: { value: "London" } });
    fireEvent.click(buttonElement);
  });
});
