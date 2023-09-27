import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllCitiesWeatherStyle.scss";
import CityCard from "../CityCard/CityCard";
import { fetchWeatherForCity } from "../../helpers/fetchWeatherForCity";
import { v4 as uuidv4 } from "uuid";
import { popularCities } from "../../data";

const AllCitiesWeather = () => {
  const dispatch = useDispatch();
  const citiesData = useSelector((state) => state.weather.cities);

  // Use useEffect to fetch weather data for popular cities when the component mounts
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Iterate through popular cities and fetch weather data for each city
      for (const city of popularCities) {
        await fetchWeatherForCity(city, dispatch);
      }
    };
    fetchWeatherData(); // Trigger the weather data fetch when the component mounts
  }, []);

  return (
    <section className="cards-section">
      <div className="container">
        <h2>Today's weather:</h2>
        <div className="cards-wrapper">
          {citiesData.map((city) =>
            city.loading ? (
              // Render a loading card for cities that are still loading
              <div key={uuidv4()} className="card">
                <div className="card__inner">
                  <p>Loading...</p>
                </div>
              </div>
            ) : (
              city.data && (
                // Render a CityCard component for cities with loaded weather data
                <CityCard key={uuidv4()} {...city.data} />
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCitiesWeather;
