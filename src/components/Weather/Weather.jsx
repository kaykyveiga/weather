import { useEffect, useState } from "react";

import fetchWeatherData from "../../API/WeatherApi";

import { RiWaterFlashFill } from 'react-icons/ri';
import { BiWind } from 'react-icons/bi';
import { WiThermometer } from 'react-icons/wi';

import "./Weather.css"

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = new Date();
  const hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  useEffect(() => {
    fetchWeatherData()
      .then(data => {
        setWeatherData(data)

      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div id="container-weather">
      <div id="forecast">
        <p id="cloud-status">Status da nuvem</p>
        <p className="forecast-paragraph">Weather</p>
        <p className="forecast-paragraph">{hours}:{minutes}</p>
        <h2 id="temperature">25°</h2>
        <p id="weather-condition">Condição meteorológica: Nublado</p>
      </div>
      <div id="more-details">
      <p className="weather-paragraph">
          <span>
            <RiWaterFlashFill />
          </span>
          90%
        </p>
        <p className="weather-paragraph">
          <span>
            <BiWind />
          </span>
          15km
        </p>
        <p className="weather-paragraph">
          <span>
            <WiThermometer />
          </span>
          25°C
        </p>
      </div>
    </div>
  )
}

export default Weather