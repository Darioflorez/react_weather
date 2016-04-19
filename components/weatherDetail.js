'use strict';

import React, {
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListView,
  StatusBar,
} from 'react-native';

import Detail from './detail'
import { styles } from '../styles/weatherDetail'

var Icon = require('react-native-vector-icons/Ionicons')

export default class WeatherDetail extends React.Component {
  constructor(){
    super()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {favorite: false, route: 'map', dataSource: ds.cloneWithRows(['Today', 'Tomorrow','Wednesday','Thursday','Friday','Saturday'])}
    this._changeDetail = this._changeDetail.bind(this)
    this._onBack = this._onBack.bind(this)
    this._toggleFavorite = this._toggleFavorite.bind(this)
  }
  _changeDetail(){
    if(this.state.route === 'map'){
      this.setState({route: 'graph'})  
    }
    else{
      this.setState({route: 'map'})
    }
    console.log(this.state.route)
  }
  _renderRow(rowData){
    return(
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}> 
        <Text style={{padding: 20 }}>{rowData}</Text>
      </View>
    );
  }
  _onBack(){
    this.props.navigator.pop({id: 'detail'})
  }
  _toggleFavorite(){
    this.setState({favorite: !this.state.favorite})
  }
  render() {
    let switchIcon, starIcon;
    this.state.route === 'map' ? switchIcon = "ios-pulse-strong" : switchIcon = "ios-navigate"
    this.state.favorite ? starIcon = "ios-star" : starIcon = "ios-star-outline"
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Detail route={this.state.route}/>
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
        <View style={styles.overlay}>
          <TouchableOpacity onPress={this._onBack}>
            <Icon style={styles.backBtn} name="ios-arrow-left" size={30} color="blue"/>
          </TouchableOpacity>
          <Text style={{padding:10, fontSize:20}}>Stockholm</Text>
          <TouchableOpacity onPress={this._toggleFavorite}>
            <Icon style={styles.backBtn} name={starIcon} size={25} color="blue"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


