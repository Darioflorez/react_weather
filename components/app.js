'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
} from 'react-native';

// Screens
import Login from './login';
import Home from './home';
import WeatherDetail from './weatherDetail';

export default class App extends React.Component {
  _renderScene(route, navigator){
    if(route.id === 'login'){
      return (<Login navigator={navigator}/>);
    }
    if(route.id === 'home'){
      return (<Home navigator={navigator}/>);
    }
    if(route.id === 'detail'){
      return (<WeatherDetail  navigator={navigator}/>);
    }
  }
  configureScene(route, routeStack){
    return Navigator.SceneConfigs.HorizontalSwipeJump
  }
  render() {
    return (
      <Navigator
        ref='app'
        initialRoute={{id: 'home'}}
        renderScene={this._renderScene}
        configureScene={ this.configureScene }
      />
    );
  }
}

const styles = StyleSheet.create({
  app:{
    flex:1,
  }
})
