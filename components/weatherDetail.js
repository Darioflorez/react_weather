'use strict';

import React, {
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListView,
} from 'react-native';

import Detail from './detail'

var Icon = require('react-native-vector-icons/FontAwesome')

export default class WeatherDetail extends React.Component {
  constructor(){
    super()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {route: 'map', dataSource: ds.cloneWithRows(['Today', 'Tomorrow','Wednesday','Thursday','Friday','Saturday'])}
    this._changeDetail = this._changeDetail.bind(this)
    this._onBack = this._onBack.bind(this)
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.NavBar}>
          <TouchableOpacity onPress={this._onBack}>
            <Icon style={styles.backBtn} name="chevron-left" size={30} />
          </TouchableOpacity>
          <Text style={{padding:10, fontSize:20}}>Stockholm</Text>
          <TouchableOpacity onPress={this._changeDetail}>
            <Icon style={styles.backBtn} name="exchange" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <Detail route={this.state.route}/>
        </View>
        <View style={styles.list}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'blue',
  },
  NavBar: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  backBtn: {
    padding:10,
  },
  info: {
    flex: 0.3,
    backgroundColor: 'white',   
  },
  list: {
    flex: 0.6,
    backgroundColor: 'white',
  },
})
