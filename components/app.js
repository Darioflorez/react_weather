'use strict';

import React, {
  PropTypes,
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
} from 'react-native';

import Login from './login'
import WeatherDetail from './weatherDetail'

export default class App extends React.Component {
  _renderScene(route, navigator){
    if(route.id === 'login'){
      return (<Login navigator={navigator}/>); 
    }
    if(route.id === 'home'){
      return (<WeatherDetail />);
    }
  }
  render() {
    return (
      <Navigator
        ref='app'
        initialRoute={{id: 'login'}}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  app:{
    flex:1,
  }
})
