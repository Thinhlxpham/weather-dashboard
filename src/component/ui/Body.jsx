import { useContext } from "react";
import WeatherIcons from "../../image/weather-logo.png";
import { WeatherContext } from "../../context/WeatherContext";

function Body() {
  const { foredayWeather } = useContext(WeatherContext);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <section id="body-pages">
      <div className="foreday-container">
        <h1 className="foreday-title">Five-day weather forecast</h1>
        <div className="foreday-details">
          {foredayWeather.length > 0 ? (
            foredayWeather.slice(0, 5).map((weather, index) => (
              <div className="foreday-para" key={index}>
                <h4 className="foreday-calendar">{formatDate(weather.dt)}</h4>
                <p className="foreday-time">{formatTime(weather.dt)}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="foreday-icons"
                />
                <p className="foreday-temp">
                  {Math.round(weather.main.temp)}°F
                </p>
                <p className="foreday-description">
                  {weather.weather[0].description}
                </p>
              </div>
            ))
          ) : (
            <p>
              No forecast data available. Search for a city to see the forecast.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Body;
