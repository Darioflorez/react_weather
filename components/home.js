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
    this.state = ({ location: location});

  };

  _fetchWeather(state: string){
    var _this = this;
    fetchWeather(state)
    .then(function(response){
      // Show this data in a list
      let location = response[0];
      _this.setState({location:location})
    }, function(error){
      console.error("Failed!", error);
    });
  }

  componentDidMount() {
    // Fetch weather for current location before rendering this Screen
    this._fetchWeather("alicante");
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
