import React from "react";
import "./CityCardStyle.scss";
import { kelvinToCelsius } from "../../helpers/convertKelvinToCelcius";
import { BiWater } from "react-icons/bi";
import { SiWindicss } from "react-icons/si";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../redux/actions/weatherActions";

const CityCard = ({ weather, main, name, wind, id }) => {
  const icon = weather[0]?.icon;
  const weatherMain = weather[0]?.main;
  const dispatch = useDispatch();

  // Define a function to handle city deletion when the card is clicked
  const handleDelete = (cityId) => {
    dispatch(deleteCity(cityId));
  };

  return (
    <div className="card" onClick={() => handleDelete(id)}>
      <div className="card__inner">
        <div className="card__left">
          <p className="card__name">{name}</p>
          <p className="card__name">{kelvinToCelsius(main.temp)}°C</p>
          <p className="card__info">
            <span className="card__category">Max. Temp.:</span>
            <span className="card__value">
              {kelvinToCelsius(main.temp_max)}°C
            </span>
          </p>
          <p className="card__info">
            <span className="card__category">Min. Temp.:</span>
            <span className="card__value">
              {kelvinToCelsius(main.temp_min)}°C
            </span>
          </p>
          <p className="card__info">
            <span className="card__category">Feels Like:</span>
            <span className="card__value">
              {kelvinToCelsius(main.feels_like)}°C
            </span>
          </p>
        </div>
        <div className="card__right">
          <div className="card__img-wrapper">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
              className="card__img__image"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>
          <p className="card__weather">{weatherMain}</p>
        </div>
      </div>
      <div className="card__wind">
        <div className="card__wind-item">
          <BiWater size={26} />
          <span className="card__wind-item__text">{main.humidity}%</span>
        </div>
        <div className="card__wind-item">
          <SiWindicss size={24} />
          <span className="card__wind-item__text">{wind.speed}KM/H</span>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
