import { useEffect, useState } from "react";
import fetchWeatherData from "../API/WeatherApi";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    fetchWeatherData()
      .then(data => {
        setWeatherData(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  return (
    <div>Weather</div>
  )
}

export default Weather