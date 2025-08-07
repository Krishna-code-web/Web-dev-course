document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const addCity = document.getElementById('add-city-btn');
  const cityList = document.getElementById('city-list');

  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables

  let cities = JSON.parse(localStorage.getItem('Cities')) || [];
  addCities();

  addCity.addEventListener('click', addToCities);

  function addToCities(){
    let input = cityInput.value.trim();
    if(input == ""){
      return;
    }
    document.getElementById("city-input").value = "";
    cities.push(input);
    localStorage.setItem('Cities', JSON.stringify(cities));
    addCities();
  }

  function addCities(){
    cityList.innerHTML = "";
    cities.forEach((city) => {
      let element = document.createElement('li');
      element.innerText = city;
      cityList.appendChild(element);
    });
  }

  cityList.addEventListener('click', async function(e){
    if(e.target.tagName === 'LI'){
      console.log(e.target.textContent)
      try{
        let data = await fetchWeatherData(e.target.textContent);
        displayWeatherData(data);
      } catch(error){
        showError();
      }
    }
  });

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error(" City Not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;

    document.getElementById('weather-container').innerHTML = `
      <h2>${name}</h2>
      <p>Temperature : ${main.temp}</p>
      <p>Weather : ${weather[0].description}</p>
    `;
    //unlock the display
  }

  function showError() {
    console.log("Nothing on screen");
  }
});
