import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Loader from '../Loader/Loader';
import Location from "../Location/Location";
import Weather from '../Weather/Weather';

import "./SearchCity.css"

const SearchCity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eda5c3aea65fa1da3b0785a496a1b127&lang=pt_br`)
        .then(response => response.json())
        .then((data) => {
          if (data.cod === "404") {
            alert("Cidade não encontrada. Por favor, insira um nome de cidade válido.");
          } else {
            setWeatherData(data);
          }
          setIsLoading(false)
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
            <button type='submit' id='submit-btn'><FaSearch /></button>
        </form>
        {!weatherData && <Loader/>}
      </div>
      {weatherData && <Location weatherData={weatherData} />}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  )
}

export default SearchCity;
