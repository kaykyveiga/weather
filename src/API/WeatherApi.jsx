

const fetchWeatherData = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=maceio&units=metric&appid=eda5c3aea65fa1da3b0785a496a1b127&lang=pt_br`)
        .then(response => response.json());
};

export default fetchWeatherData; 


