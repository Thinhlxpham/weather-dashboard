import Footer from "../component/ui/Footer";
import Navbar from "../component/ui/Navbar";
import WeatherIcons from "../image/weather-logo.png";
function SaveWeather() {
  return (
    <>
      <Navbar />
      <div className="save-main-page">
        <a href="/" className="back-to-home">
          {"< Home"}
        </a>
        <h1 className="main-title">Save Weather</h1>
        <div className="header-details">
          <div className="header-details-title">
            <h1 className="header-title">New York</h1>
            <div className="header-convert">
              <button className="convert-to-f">F</button>|
              <button className="convert-to-c">C</button>
            </div>
          </div>
          <div className="header-details-body">
            <h2 className="title-degree">33°F</h2>
            <p className="humidity-percent">Humidity: 56%</p>
            <p className="wind-speed">Wind: 10 mph</p>
          </div>
          <img src={WeatherIcons} alt="" className="header-weather-icons" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SaveWeather;
