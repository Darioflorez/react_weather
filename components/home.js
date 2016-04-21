'use strict';

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

// function for fetching weather
import { fetchWeather } from '../js/fetchData';

// Child Components
import SearchBar from './search';
import CurrentLocation from './currentLocation';

// Data structures
const location = {
  name: null,
  country: null,
  description: null,
  icon: null,
  temp: null,
  pressure: null,
  humidity: null,
  temp_min: null,
  temp_max: null
};

export default class Home extends Component {

  constructor(props){
    super(props);

    this._fetchWeather = this._fetchWeather.bind(this);
    this._getCurrentLocation = this._getCurrentLocation.bind(this);
    this.state = ({ location: location});

  };

  _getCurrentLocation(){
    console.log("_getCurrentLocation");
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //fetchWeather(null,position.coords)
          resolve(position.coords);
        },
        (error) => {
          reject(Error(error.message));
          alert(error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    });
  }

  _fetchWeather(city: string, coords: Object){
    console.log("_fetchWeather");
    console.log(coords);
    var _this = this;
    fetchWeather(city, coords)
    .then((response) => {
      // Show this data in a list
      let location = response[0];
      _this.setState({location:location})
    })
    .catch((error) => {
      console.error("Fetch Weather", error);
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Fetch weather for current location before rendering this Screen
    var _this = this;
    this._getCurrentLocation()
      .then((response) => {
        //fetch weather with coordinates
        //_this._fetchWeather("alicante");
        _this._fetchWeather(null, response);
    }, (error) => {
        console.error("Get current Location", error);
    });
  }

  render() {
    console.log("RENDER");
    console.log(this.state.location);
    return (
      <View
        style={{flex:1}}>
        <SearchBar />
        <CurrentLocation navigator={this.props.navigator}
          location={this.state.location}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
