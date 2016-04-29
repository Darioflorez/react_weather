'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
} from 'react-native';

// Screens
import Home from './home';
import WeatherDetail from './weatherDetail';

export default class Weather extends React.Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene(route, navigator){
    if(route.id === 'home'){
      return (<Home navigator={navigator} onLogout={this.props.onLogout}/>);
    }
    if(route.id === 'detail'){
      return (<WeatherDetail favorite={route.favorite} header={route.header} navigator={navigator}/>);
    }
  }

  _configureScene(route, routeStack){
    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {}
    }
  }

  render() {
    console.log(this.props)
    return (
      <Navigator
        ref='app'
        initialRoute={{id: 'home'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene }
      />

    );
  }
}
