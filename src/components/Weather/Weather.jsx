



import { RiWaterFlashFill } from 'react-icons/ri';
import { BiWind } from 'react-icons/bi';
import { WiThermometer } from 'react-icons/wi';

import "./Weather.css"

function Weather({ weatherData }) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNumber = currentDate.getMonth()
  let monthName;

  switch (monthNumber) {
    case 0: monthName = "Janeiro"; break;
    case 1: monthName = "Fevereiro"; break;
    case 2: monthName = "Março"; break;
    case 3: monthName = "Abril"; break;
    case 4: monthName = "Maio"; break;
    case 5: monthName = "Junho"; break;
    case 6: monthName = "Julho"; break;
    case 7: monthName = "Agosto"; break;
    case 8: monthName = "Setembro"; break;
    case 9: monthName = "Outubro"; break;
    case 10: monthName = "Novembro"; break;
    case 11: monthName = "Dezembro"; break;
    default: monthName = "Mês inválido"; break;
  }


  const meteorologicalLocation = weatherData.name;
  const temperature = Math.round(weatherData.main.temp);
  const meteorologicalCondition = weatherData.weather[0].description;
  const wind = Math.round(weatherData.wind.speed);
  const humidity = weatherData.main.humidity;
  const cloudStatus = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`




  return (
    <div id="container-weather">
      <div id="forecast">
        <p id="cloud-status"><img src={cloudStatus} alt="" /></p>
        <p className="forecast-paragraph">{meteorologicalLocation}</p>
        <p className='forecast-paragraph'>Hoje, {day} {monthName}</p>
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