'use strict';

const BASE_URL = "http://api.openweathermap.org/data/2.5/";
const KEY = "3afea7f9ad83cfd1c1e352f5977f7af7";
const TYPE = "like";
const UNITS = "metric";

type Date = {
    day: string;
    dateStr: string;
};

type Location = {
  longitude: number;
  latitude: number;
  date: Date;
  name: string;
  country: string;
  description: string;
  icon: string;
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: numbe;
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
          var list = [];
          let location :Location = _createLocationObject(item);
          list.push(location);
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
              //_pushItemIntoList(item: Object, list: []) => void
              let location :Location = _createLocationObject(item);
              list.push(location);
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
            var list = _createForrecastList(responseJSON);
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

function fetchWeatherList(input: string){
  return new Promise((resolve,reject) => {
    var list = [];
    _fetchWeatherByLocationName(input)
      .then((result) => {
        var today = result[0];
        list.push(today)
        return input;
      })
      .then(fetchWeatherForrecast)
      .then((result) => {
        result.forEach((item) =>{
          list.push(item);
        })
        list[0].date.day = "Idag";
        list[1].date.day = "Imorgon";
        resolve(list);
      })
      .catch((error) => {
        console.error(error);
        reject(Error("fetchWeatherList"));
      });
  });
}

// make a function that fetchWeather and then fetchWeatherForrecast
// make a list with the returned objects
function _getDayName(input: number): string{
  switch(input) {
    case 0:
      return "Söndag";
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsdag";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
    default:
        break;
  }
}

function _getDateString(date: Object): string{
  let day = date.getDate();
  day = ((date<10) ? "0"+day : day);
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  month = ((month<10) ? "0"+month : month);

  return year + "-" + month + "-" + day;
}

function _createForrecastList(forrecast: Object): []{
  var list = [];
  /*const location: Location = _createLocationObject(today);
  list.push(location);*/

  const city = forrecast.city;
  const responseList = forrecast.list;

  // This Object is quite different the current weather
  // This is why this operations can not be done in a function
  const dateToday = new Date();
  const year = dateToday.getFullYear();
  const month = dateToday.getMonth();
  const dayNum = dateToday.getDate();
  var daysInTheFuture = 1;
  responseList.forEach((item,index) => {
  console.log("INDEX: " + index)
    var fullDate = new Date(year,month,dayNum+daysInTheFuture);
    //console.log(fullDate.toDateString());
    const day = _getDayName(Number(fullDate.getDay()));
    const dateStr = _getDateString(fullDate);
    const date = {
      day: day,
      dateStr: dateStr
    };
    let weather: Location = {
          longitude: city.coord.lon,
          latitude: city.coord.lat,
          date: date,
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
    daysInTheFuture++;
  })
  
  return list;
}

function _createLocationObject(item: Object): Location{
  let fullDate = new Date();
  let day = _getDayName(Number(fullDate.getDay()));
  let dateStr = _getDateString(fullDate);
  let date = {
    day: day,
    dateStr: dateStr
  };

  let location: Location = {
        longitude: item.coord.lon,
        latitude: item.coord.lat,
        date:date,
        name: item.name,
        country: item.sys.country,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        temp: item.main.temp,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max
  };

  return location;
}

module.exports = {
  fetchWeather: fetchWeather,
  fetchWeatherForrecast: fetchWeatherForrecast,
  fetchWeatherList: fetchWeatherList
};
