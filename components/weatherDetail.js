'use strict';

import React, {
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListView,
  StatusBar,
  Platform,
} from 'react-native';

import Detail from './detail';
import DetailBar from './toolbar/detailBar';
import { styles } from '../styles/weatherDetail';
import { addToFavorites, removeFromFavorites } from '../js/storage';
import { fetchWeatherList } from '../js/fetchData';

var Icon = require('react-native-vector-icons/Ionicons')

export default class WeatherDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favorite: this.props.favorite,
      region: null,
      rawData: null,
      route: 'map',
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
    this._changeDetail = this._changeDetail.bind(this)
    this._onBack = this._onBack.bind(this)
    this._toggleFavorite = this._toggleFavorite.bind(this)
  }
  componentDidMount(){
    let list = []
    fetchWeatherList(this.props.header.searchString)
    .then(
      (data) =>  {
      this.setState({
        rawData: data,
        dataSource: this.state.dataSource.cloneWithRows(data),
        region: {
          longitude: data[0].longitude,
          latitude: data[0].latitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }
      })
    })
    .catch( error => console.log("Error when fetching weather: ", error))

  }
  _changeDetail(){
    if(this.state.route === 'map'){
      this.setState({route: 'graph'})
    }
    else{
      this.setState({route: 'map'})
    }
    //console.log(this.state.route)
  }
  _renderRow(rowData, sectionID: number, rowID: number){
    return(
      <View style={styles.rowView}>
        <View style={{margin: 10,flex: 1,flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={styles.dateView}>
            <Text style={styles.day}>{rowData.date.day}</Text>
            <Text style={styles.dateStr}>{rowData.date.dateStr}</Text>
          </View>
          <Text style={{fontSize: 14, color: '#1F1F21'}}>{rowData.description}</Text>
          <Text style={styles.rowText}>{rowData.temp}°c</Text>
          <View style={{flexDirection: 'column', }}>
            <Text style={{fontSize: 12, color: '#1F1F21'}}>max: {rowData.temp_max}°</Text>
            <Text style={{fontSize: 12, color: '#1F1F21'}}>min: {rowData.temp_min}°</Text>
          </View>
        </View>
      </View>
    );
  }
  _onBack(){
    this.props.navigator.resetTo({id: 'weather'})
  }
  _toggleFavorite(){
    this.setState({favorite: !this.state.favorite})
    let value = this.props.header.searchString;
    console.log("VALUE", value);
    this.state.favorite ? addToFavorites(value) : removeFromFavorites(value)
  }
  render() {
    let switchIcon;
    this.state.route === 'map' ? switchIcon = "ios-pulse-strong" : switchIcon = "ios-navigate";

    let barIOS, barAndroid;
    if(Platform.OS === 'ios'){
      barIOS = <DetailBar
                  name={this.props.header.name}
                  favorite={this.state.favorite}
                  toggleFavorite={this._toggleFavorite}
                  onBack={this._onBack}
                />
    } else {
      barAndroid = <DetailBar
                    name={this.props.header.name}
                    favorite={this.state.favorite}
                    toggleFavorite={this._toggleFavorite}
                    onBack={this._onBack}
                  />;
    }
    return (
      <View style={{flex:1}}>
        {barAndroid}
        <View style={styles.container}>
          <View style={styles.info}>
            <Detail rawData={this.state.rawData} route={this.state.route} region={this.state.region}/>
            <TouchableOpacity style={styles.switchMode} onPress={this._changeDetail}>
              <Icon style={styles.backBtn} name={switchIcon} size={25}/>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          </View>
          {barIOS}
        </View>
      </View>
    );
  }
}
