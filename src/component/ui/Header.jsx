import { useContext, useState } from "react";
import WeatherIcons from "../../image/weather-logo.png";
import { WeatherContext } from "../../context/WeatherContext";

function Header() {
  const { value, setValue, weatherData, fetchAllWeatherData } =
    useContext(WeatherContext);

  const [unit, setUnit] = useState("imperial");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAllWeatherData(value);
  };
  const convertDegree = (temp) => {
    if (unit === "metric") {
      return Math.round(((temp - 32) * 5) / 9);
    } else {
      return Math.round(temp);
    }
  };
  const convertSpeed = (speed) => {
    if (unit === "metric") {
      return Math.round(speed * 1.60934);
    } else {
      return Math.round(speed);
    }
  };
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };
  return (
    <header id="header-page">
      <div className="header-container">
        <h1 className="header-title">Welcome to Weather Dashboard</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a City!"
            className="search-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search-city">Search</button>
        </form>
        <div className="header-details">
          {weatherData && (
            <>
              <div className="header-details-title">
                <h1 className="header-title">{weatherData.name}</h1>
                <div className="header-convert">
                  <button
                    className="convert-to-f"
                    onClick={() => handleUnitChange("imperial")}
                  >
                    F
                  </button>
                  |
                  <button
                    className="convert-to-c"
                    onClick={() => handleUnitChange("metric")}
                  >
                    C
                  </button>
                </div>
              </div>
              <div className="header-details-body">
                <h2 className="title-degree">
                  {convertDegree(weatherData.main.temp)}°
                  {unit === "imperial" ? "F" : "C"}
                </h2>
                <p className="humidity-percent">
                  Humidity: {weatherData.main.humidity}%
                </p>
                <p className="wind-speed">
                  Wind: {convertSpeed(weatherData.wind.speed)}{" "}
                  {unit === "imperial" ? "mph" : "km/h"}
                </p>
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                className="header-weather-icons"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
