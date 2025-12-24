import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherLogo from "../../image/weather-logo.png";
import { faBars, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState("light");

  useEffect(() => {
    document.body.className = toggle === "light" ? "light-mode" : "dark-mode";
  }, [toggle]);

  function handleToggle() {
    setToggle(toggle === "light" ? "dark" : "light");
  }

  return (
    <nav>
      <img src={WeatherLogo} alt="logo-weather" className="nav-logo" />
      <div className="menu-links">
        <a href="/" className="menu-link">
          Home
        </a>
        {/* <a href="/save" className="menu-link">
          Save
        </a> */}

        <FontAwesomeIcon
          icon={faLightbulb}
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon icon={faBars} className="menu-bars" />
      </div>
    </nav>
  );
}
export default Navbar;
