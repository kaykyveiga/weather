import "./SearchCity.css"
import { useState } from 'react';
import Weather from '../Weather/Weather';
import Location from "../Location/Location";

const SearchCity = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eda5c3aea65fa1da3b0785a496a1b127&lang=pt_br`)
        .then(response => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  }

  return (
    <div>
      <div id="city-search">
        <form onSubmit={handleSubmit}>
          <label>
            <p id='text-search'>Busque por sua cidade:</p>
            <input type="text" name="city" id="input-search" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>

        </form>
      </div>
      {weatherData && <Location weatherData={weatherData} />}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default SearchCity;
