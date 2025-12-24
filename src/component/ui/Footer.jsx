import WeatherLogo from "../../image/weather-logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-details">
        <img src={WeatherLogo} alt="" className="footer-logo" />
        <span className="footer-owner">Create by @Thinh Pham</span>
      </div>
    </footer>
  );
}

export default Footer;
