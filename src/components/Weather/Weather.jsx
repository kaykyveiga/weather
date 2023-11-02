import { RiWaterFlashFill } from 'react-icons/ri';
import { BiWind } from 'react-icons/bi';
import { WiThermometer } from 'react-icons/wi';

import "./Weather.css"

function Weather({ weatherData }) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const temperature = Math.round(weatherData.main.temp);
  const meteorologicalCondition = capitalizeFirstLetter(weatherData.weather[0].description);
  const wind = Math.round(weatherData.wind.speed);
  const humidity = weatherData.main.humidity;
  const cloudStatus = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`

  return (
    <div id="container-weather">
      <div id="forecast">
        <p><img id="cloud-status" src={cloudStatus} alt="Status da nuvem" /></p>
        <h2 id="temperature">{temperature}°</h2>
        <p id="weather-condition">Condição meteorológica: {meteorologicalCondition}</p>
      </div>
      <div id="more-details">
        <p className="weather-paragraph">
          <span>
            <RiWaterFlashFill />
          </span>
          {humidity}%
        </p>
        <p className="weather-paragraph">
          <span>
            <BiWind />
          </span>
          {wind} km
        </p>
        <p className="weather-paragraph">
          <span>
            <WiThermometer />
          </span>
          {temperature}°
        </p>
      </div>
    </div>
  )
}

export default Weather