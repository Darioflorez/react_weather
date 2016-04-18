'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
} from 'react-native';

import Login from './login'
import WeatherDetail from './weatherDetail'
import SearchBar from './search';
import CurrentLocation from './currentLocation'

export default class App extends React.Component {
  _renderScene(route, navigator){
    if(route.id === 'login'){
      return (<Login navigator={navigator}/>); 
    }
    if(route.id === 'home'){
      return (<View style={{flex:1}}>
                <SearchBar />
                <CurrentLocation navigator={navigator}/>
              </View>);
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
        initialRoute={{id: 'login'}}
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
