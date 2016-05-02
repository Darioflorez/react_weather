'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Platform,
} from 'react-native';

// Screens
import Weather from './weatherPage/weather';
import WeatherDetail from './weatherPage/weatherDetail';

export default class WeatherNavigator extends React.Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._weatherView = this._weatherView.bind(this);
  }
  
  _weatherView(){
      if(Platform.OS === 'ios'){
        return <Weather navigator={navigator}/>
      } else {
        return <Weather navigator={navigator} toggleDrawer={this.props.toggleDrawer}/>
      }
  }

  _renderScene(route, navigator){
    switch (route.id) {
      case 'weather':
        return (this._weatherView());
      case 'detail':
        return (<WeatherDetail favorite={route.favorite} header={route.header} navigator={navigator}/>);
      default:

    }
  }


  _configureScene(route, routeStack){

    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {}
    }
  }

  render() {
    return (
      <Navigator
        ref='app'
        initialRoute={{id: 'weather'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene }
      />

    );
  }
}
