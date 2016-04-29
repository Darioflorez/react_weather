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
import { getFavorites, } from '../js/storage';

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

  componentDidMount() {
    getFavorites().catch( error => console.log("Error retrieving data:", error) )
    .done( data => {
      if(data != null){
        this.setState({
          favouriteLocations: this.state.favouriteLocations.cloneWithRows(JSON.parse(data))
        });
      }
    })
  }

  _currentLocationPress(){
    //console.log('current location pressed!');
    let searchString = this.props.location.name+","+this.props.location.country;
    this.props.navigator.push({id: 'detail',
      header: {name: this.props.location.name, country: this.props.location.country, searchString: searchString}})
  }

  _pressRow(rowID: number, rowData: string){
    //console.log(rowID);
    let list = rowData.split(',');
    this.props.navigator.push({id: 'detail', favorite: true, header: {name: list[0], country: list[1], searchString: rowData}})
  }

  _renderFavourites(rowData: string, sectionID: number, rowID: number){

    // this Component have to be under <Text>{rowData}</Text>{arrow}
    const arrow = <Icon style={{paddingRight:10}}name="ios-arrow-right" size={30} color="black"/>;

    return(
      <TouchableHighlight onPress={() => this._pressRow(rowID, rowData)} underlayColor={'#D1EEFC'} >
        <View style={styles.item}>
          <Text style={styles.favoritesText}>
            {rowData}
          </Text>

        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.currentLocation} onPress={this._currentLocationPress}>
          <Text style={styles.header}>{this.props.location.name}</Text>
          <View style={styles.currentView}>
            <Icon style={{color: 'white',}}
            name="ios-partlysunny-outline" size={100}
            />
            <Text style={styles.tempeture}>{this.props.location.temp}°c</Text>
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
