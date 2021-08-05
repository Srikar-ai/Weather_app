
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  let U=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  let mypromise=fetch(U);
  return mypromise.then((given)=>{
    return given.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((response)=>{
    showWeatherData(response);
  }).catch((error)=>{
    console.log(error);
  })
}


showWeatherData = (weatherData) => {
  console.log(weatherData);
  let name=document.getElementById("city-name");
  name.innerHTML=weatherData.name;
  let type=document.getElementById('weather-type');
  type.innerHTML=weatherData.weather[0].main;
  let temp=document.getElementById("temp");
  temp.innerHTML=weatherData.main.temp;
  let minweather=document.getElementById("min-temp");
  minweather.innerHTML=weatherData.main.temp_min;
  let maxweather=document.getElementById("max-temp");
  maxweather.innerHTML=weatherData.main.temp_max;

  
}

