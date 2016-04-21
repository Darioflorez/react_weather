'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Text,
  Image,
} from 'react-native';

import { styles } from '../styles/currentLocation';
import { fetchWeather } from '../js/fetchData';

var Icon = require('react-native-vector-icons/Ionicons')

const {height, width} = Dimensions.get('window');

export default class CurrentLocation extends Component {

  constructor(props){
    super(props);
    // bind functions
    this._currentLocationPress = this._currentLocationPress.bind(this);
    this._renderFavourites = this._renderFavourites.bind(this);
    this._pressRow = this._pressRow.bind(this);

    this.state = {
      favouriteLocations: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  };
  _currentLocationPress(){
    //console.log('current location pressed!');
    fetchWeather('mad');
    this.props.navigator.push({id: 'detail'})
  }

  _pressRow(rowID: number){
    //console.log(rowID);
    this.props.navigator.push({id: 'detail'})
  }

  _renderFavourites(rowData: string, sectionID: number, rowID: number){
    return(
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor={'#D1EEFC'} >
        <View style={styles.item}>
          <Text style={{padding: 20 }}>
            {rowData}
          </Text>
          <Icon style={{paddingRight:10}}name="ios-arrow-right" size={30} color="blue"/>
        </View>
      </TouchableHighlight>
    );
  }

  componentDidMount() {
    this.setState({
      favouriteLocations: this.state.favouriteLocations.cloneWithRows(['row1', 'row2', 'row3', 'row4', 'row5', 'row6'])});
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.currentLocation} onPress={this._currentLocationPress}>
          <Text style={styles.header}>{this.props.location.name}</Text>
          <View style={styles.currentView}>
            <Icon style={{color: 'white',}} name="ios-partlysunny-outline" size={100} />
            <Text style={styles.tempeture}>{this.props.location.temp}°C</Text>
          </View>
        </TouchableOpacity>
        <ListView
          style={styles.list}
          dataSource={this.state.favouriteLocations}
          renderRow={this._renderFavourites}
          />
      </View>
    );
  }
}
