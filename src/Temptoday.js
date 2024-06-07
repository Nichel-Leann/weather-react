import React from "react";

export default function Temptoday() {
  return (
    <div className="Temptoday">
      <div className="weather-data">
        <div>
          <h1 class="city-name">Miami</h1>
          <p className="weather-details">
            Monday
            <span> 1:11</span>,<span>scattered clouds</span>
            <br />
            Humidity:
            <span className="weather-data-unit">68%</span>, Wind:
            <span className="weather-data-unit">7.72km/h</span>
          </p>
        </div>

        <div className="weather-today">
          <span className="weather-icon">🌦️</span>
          <span className="weather-temperature">12</span>
          <span className="weather-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
