'use strict';

const BASE_URL = "http://api.openweathermap.org/data/2.5/";
const KEY = "3afea7f9ad83cfd1c1e352f5977f7af7";
const TYPE = "like";
const UNITS = "metric";

type Location = {
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
  const weatherUrl = BASE_URL
    .concat("weather?lat=" + coords.latitude)
    .concat("&lon=" + coords.longitude)
    .concat("&type="+TYPE)
    .concat("&units="+ UNITS)
    .concat("&appid=" + KEY);

  return new Promise(function(resolve, reject){
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

  const weatherUrl = BASE_URL
    .concat("find?q=" + input)
    .concat("&type="+TYPE)
    .concat("&units="+ UNITS)
    .concat("&appid=" + KEY);

  return new Promise(function(resolve, reject){
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

module.exports = {
  fetchWeather: fetchWeather
};
