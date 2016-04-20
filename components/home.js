'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  ListView,
  Text,
} from 'react-native';

// function for fetching weather
import { fetchWeather } from '../js/fetchData';

// Child Components
import SearchBar from './search';
import SearchResult from './searchResult';
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
    this.state = ({ location: location, list: [], listLength: 0});
    this._fetchWeather = this._fetchWeather.bind(this);
    this._setList = this._setList.bind(this);
    this._resetList = this._resetList.bind(this);
  };
  
  _setList(list){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({list: ds.cloneWithRows(list), listLength: list.length});
  }
  _resetList(){
    this.setState({list: [], listLength: 0});
  }
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
    let output;
    this.state.listLength >= 1 ? 
    output = <SearchResult data={this.state.list}/> :
    output = <CurrentLocation navigator={this.props.navigator}
          location={this.state.location}
          />;
    return (
      <View
        style={{flex:1}}>
        <SearchBar setList={this._setList} resetList={this._resetList}/>
        { output }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
