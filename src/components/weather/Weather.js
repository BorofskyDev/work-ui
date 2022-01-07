import React, { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Weather() {
  const apiKey = "3d87faf630856447b6368a4936e03362";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="weatherApp">
      <div className="Weather">
        {typeof weatherData.main === "undefined" ? (
          <div class="welcome">
            <p>Welcome to Your Weather. Please enter a city.</p>
          </div>
        ) : (
          <div>
            <p>{weatherData.name}</p>
            <p>{Math.round(weatherData.main.temp)}°F</p>
            <p>{weatherData.weather[0].main}</p>
          </div>
        )}
        <input
          className="input"
          placeholder="Enter City..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        />

        <div class="bottom-text">
          <NavLink class="link" to="/dashboard">
            <GiReturnArrow />
          </NavLink>
          <p>Return</p>
        </div>
      </div>
    </div>
  );
}
