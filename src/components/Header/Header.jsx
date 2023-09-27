import React from "react";
import "./HeaderStyle.scss";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div>
            <a href="#" className="header__logo">
              <img
                src="./assets/images/openweather.svg"
                width={50}
                height={50}
                alt="WeatherSearch"
              />
              <span>WeatherSearch</span>
            </a>
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
