import { useEffect, useState } from "react";
import fetchWeatherData from "../../API/WeatherApi";

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
    <div id="weather">
      <div id="forecast">
        <p>Weather</p>
        <p>{hours}:{minutes}</p>
        <h2>25°</h2>
        <p>Nublado <span>Status nuvem</span></p>
      </div>
      <div id="more-details">
        <span>Umidade</span>
        <p>90%</p>
        <span>Vento</span>
        <p>15km</p>
        <span>Temperatura</span>
        <p>25°C</p>
      </div>
    </div>
  )
}

export default Weather