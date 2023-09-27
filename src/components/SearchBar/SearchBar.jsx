import React, { useEffect, useRef, useState } from "react";
import "./SearchBarStyle.scss";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { fetchWeatherForCity } from "../../helpers/fetchWeatherForCity";
import { autocompleteCities } from "../../data";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Function to handle city search
  const handleSearch = async () => {
    if (!cityName || cityName.trim() === "") return;
    try {
      await fetchWeatherForCity(cityName, dispatch, true);
      setCityName("");
      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Function to handle input field changes and suggest cities
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCityName(value);
    const filteredSuggestions = autocompleteCities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setCityName(suggestion);
    setSuggestions([]);
  };

  // Function to handle clicks outside of the input field
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };

  // Add click event listener to detect clicks outside of the input field
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          type="text"
          placeholder="Search for a city..."
          className="search__input"
          value={cityName}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button
          className="search__btn"
          onClick={handleSearch}
          aria-label="Search"
        >
          <BsSearch size={20} />
        </button>
      </div>
      {suggestions.length > 0 ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default SearchBar;
