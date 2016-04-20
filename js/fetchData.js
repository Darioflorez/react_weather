'use strict';

const URL = "http://api.openweathermap.org/data/2.5/find?q="
const KEY = "3afea7f9ad83cfd1c1e352f5977f7af7";
const TYPE = "like";
const UNITS = "metric";

const CITYURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=";
const GOOGLEKEY = "AIzaSyDJt6VHTe4GeiDvxcvcUPrLtB0dGzBeb3A";

// Weather api don't allows search for string with less than 3 characters
function fetchWeather(input: string) {
  var url = CITYURL + input + "&types=(cities)&language=se&key=" + GOOGLEKEY;
  var weatherUrl = URL + input + "&type="+TYPE + "&units="+ UNITS + "&appid=" + KEY;

  return new Promise(function(resolve, reject){
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((responseJSON) => {
        if(responseJSON.cod === "200"){
            const responseList = responseJSON.list;
            var list = [];
            responseList.forEach(item => {
              // it can makes better
              let weather: {
                name: string;
                country: string;
                description: string;
                icon: string;
                temp: number;
                pressure: number;
                humidity: number;
                temp_min: number;
                temp_max: number
              } = {name: item.name,
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
          console.log("FETCH ERROR: " + responseJSON.cod);
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
