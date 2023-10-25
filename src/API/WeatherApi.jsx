const fetchWeatherData = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=eda5c3aea65fa1da3b0785a496a1b127`)
        .then(response => response.json());
};

export default fetchWeatherData; 


