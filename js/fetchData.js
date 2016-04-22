'use strict';

const BASE_URL = "http://api.openweathermap.org/data/2.5/";
const KEY = "3afea7f9ad83cfd1c1e352f5977f7af7";
const TYPE = "like";
const UNITS = "metric";

type Location = {
  longitude: number;
  latitude: number;
  name: string;
  country: string;
  description: string;
  icon: string;
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number
};

// Weather api don't allows search for string with less than 3 characters
function fetchWeather(input: string, coords: Object) {
  if(coords){
    return _fetchWeatherByCoordinates(coords);
  }else{
    return _fetchWeatherByLocationName(input);
  }
}

// Those functions can be made better,
// Make a functions fetchWeather(URL) => Location: []
// This function need another function pushLocationToList(item: Object, list: []) => void
//
function _fetchWeatherByCoordinates(coords: Object){
  // Build the URL to be used to get the weather
  const weatherUrl = BASE_URL
    .concat("weather?lat=" + coords.latitude)
    .concat("&lon=" + coords.longitude)
    .concat("&type="+TYPE)
    .concat("&units="+ UNITS)
    .concat("&appid=" + KEY);

  return new Promise((resolve, reject) => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((item) => {
        if(Number(item.cod) === 200){
          // pushItemIntoList(item Object, list []) => void
          let list = [];
          let weather: Location = {name: item.name,
                country: item.sys.country,
                description: item.weather[0].description,
                icon: item.weather[0].icon,
                temp: item.main.temp,
                pressure: item.main.pressure,
                humidity: item.main.humidity,
                temp_min: item.main.temp_min,
                temp_max: item.main.temp_max
          };
          list.push(weather);
          resolve(list);
          //
        }else{
          console.error("_fetchWeatherByCoordinates" + item.cod);
          reject(Error(item.cod));
        }
      })
      .catch((error) => {
        reject(Error("Network Error"));
      });
  });
}

function _fetchWeatherByLocationName(input: string){
// Build the URL to be used to get the weather
  const weatherUrl = BASE_URL
    .concat("find?q=" + input)
    .concat("&type="+TYPE)
    .concat("&units="+ UNITS)
    .concat("&appid=" + KEY);

  return new Promise((resolve, reject) => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((responseJSON) => {
          if(Number(responseJSON.cod) === 200){
          // if(responseJSON.list) forEach case
            const responseList = responseJSON.list;
            var list = [];
            responseList.forEach(item => {
              // pushItemIntoList(item Object, list []) => void
              let weather: Location = {name: item.name,
                    country: item.sys.country,
                    description: item.weather[0].description,
                    icon: item.weather[0].icon,
                    temp: item.main.temp,
                    pressure: item.main.pressure,
                    humidity: item.main.humidity,
                    temp_min: item.main.temp_min,
                    temp_max: item.main.temp_max
              };
              list.push(weather);
            });
            resolve(list);
        }
        else{
          console.error("FETCH ERROR: " + responseJSON.cod);
          reject(Error(responseJSON.cod));
        }
      })
      .catch((error) => {
        reject(Error("Network Error"));
      });
  });
}

function fetchWeatherForrecast(input: string){
  // Build the URL to be used to get the weather
  const weatherUrl = BASE_URL
    .concat("forecast/daily?q=" + input)
    .concat("&units=" + UNITS)
    .concat("&cnt=7")
    .concat("&appid=" + KEY);

  return new Promise((resolve,reject) => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((responseJSON) => {
          if(Number(responseJSON.cod) === 200){
            const city = responseJSON.city;
            console.log("fetchWeatherForrecast");
            console.log(city);
            const responseList = responseJSON.list;
            var list = [];
            // This Object is quite different the current weather
            // This is why this operations can not be done in a function
            responseList.forEach((item) => {
              let weather: Location = {
                    longitude: city.coord.lon,
                    latitude: city.coord.lat,
                    name: city.name,
                    country: city.country,
                    description: item.weather[0].description,
                    icon: item.weather[0].icon,
                    temp: item.temp.day,
                    pressure: item.pressure,
                    humidity: item.humidity,
                    temp_min: item.temp.min,
                    temp_max: item.temp.max
              };
              list.push(weather);
            })
            resolve(list);
        }
        else{
          console.error("FETCH ERROR: " + responseJSON.cod);
          reject(Error(responseJSON.cod));
        }
      })
      .catch((error) => {
        reject(Error("Network Error"));
      });
  });
}

module.exports = {
  fetchWeather: fetchWeather,
  fetchWeatherForrecast: fetchWeatherForrecast
};
