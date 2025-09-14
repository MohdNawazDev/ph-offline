
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src="/images/logo.png" alt="Weatherly Logo" />
        <h1>Weatherly</h1>
      </header>

      <main className="main">
        <div className="weather-card">
          <div className="location-container">
            <input type="text" id="location-input" placeholder="Enter city name" />
            <button id="search-btn">Search</button>
            <button id="locationBtn">📍 Use My Location</button>
            <button id="installBtn" style={{ display: "none" }}>Install App</button>
          </div>

          <div id="offline-message" className="offline-message">
            You are currently offline. Weather data may not be up-to-date.
          </div>

          <div className="error">
            <p id="error-message"></p>
          </div>

          <div id="weather-container" className="weather-container">
            <h3>Your last searched location weather:</h3>
            <div className="location-info">
              <h2 id="city"></h2>
              <p id="date"></p>
            </div>

            <div className="current-weather">
              <img id="weather-icon" src="" alt="Weather icon" />
              <div className="temperature-container">
                <h3 id="temperature"></h3>
                <p id="weather-description"></p>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail">
                <img id="humidity-icon" src="/images/humidity.png" alt="Humidity icon" />
                <span className="label">Humidity</span>
                <span id="humidity" className="value"></span>
              </div>
              <div className="detail">
                <img id="wind-icon" src="/images/wind.png" alt="Wind icon" />
                <span className="label">Wind</span>
                <span id="wind" className="value"></span>
              </div>
            </div>
          </div>

          <div className="location-weather">
            <h3>Your location's weather:</h3>
            <div className="weather-info" id="weatherInfo"></div>
          </div>
        </div>
      </main>

      <footer>
        <p>
          Made with ❤️ by{" "}
          <a href="www.linkedin.com/in/damilola-oniyide">Damilola Oniyide</a>
        </p>
      </footer>
    </div>
  );
}
