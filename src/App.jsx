import { useEffect, useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SaveWeather from "./pages/SaveWeather";

import { WeatherContext } from "./context/WeatherContext";

function App() {
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [foredayWeather, setForeDayWeather] = useState([]);
  // `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=92e8f4d9c2ae3108523a8fe757c6363c`
  // `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=92e8f4d9c2ae3108523a8fe757c6363c

  async function fetchValueCityData(city) {
    if (!city || city.trim() === "") return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=92e8f4d9c2ae3108523a8fe757c6363c`
      );
      if (!response.ok) throw new Error("Weather is not found");
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeatherData(null);
    }
  }
  async function fetchForeDayAPI(city) {
    if (!city || city.trim() === "") return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=92e8f4d9c2ae3108523a8fe757c6363c`
      );
      if (!response.ok) throw new Error("Foreday is not found!");
      const data = await response.json();
      setForeDayWeather(data.list);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setForeDayWeather([]);
    }
  }

  // Fetch both API at once
  async function fetchAllWeatherData(city) {
    await Promise.all([fetchValueCityData(city), fetchForeDayAPI(city)]);
  }

  return (
    <WeatherContext.Provider
      value={{
        value,
        setValue,
        weatherData,
        setWeatherData,
        foredayWeather,
        setForeDayWeather,
        fetchValueCityData,
        fetchForeDayAPI,
        fetchAllWeatherData,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/save" element={<SaveWeather />} />
        </Routes>
      </Router>
    </WeatherContext.Provider>
  );
}

export default App;
