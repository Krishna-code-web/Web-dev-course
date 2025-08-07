document.addEventListener('DOMContentLoaded', function(){
    let city = document.getElementById('city-input');
    let weatherClick = document.getElementById('get-weather-btn');
    let cityBanner = document.getElementById('city-name');
    const weatherInfo = document.getElementById("weather-info");
    let temperature = document.getElementById('temperature');
    let description = document.getElementById('description');
    let errorMessage = document.getElementById('error-message');

    const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";

    weatherClick.addEventListener('click', async function(){
        let cityName = city.value.trim();
        if(cityName==""){
            return;
        }
        
        // it may throw an error
        // server/database is always in another continent.

        try{
            const weatherData = await fetchWeatherData(cityName);
            displayWeatherData(weatherData);
        } catch(error){
            showError();
        }
    });

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City Not Found!")
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data){
        console.log(data)
        const {name,main,weather} = data;
        console.log(name)
        cityBanner.textContent = name;
        temperature.textContent = `Temperature : ${main.temp}`;
        description.textContent = `Weather : ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})