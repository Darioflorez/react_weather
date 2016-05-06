'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';

// Screens
import Login from './login';
import Home from './home';
import CameraPage from './camera';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this._handleBackButton = this._handleBackButton.bind(this);

  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

  _handleBackButton(){
    const {navigator} = this.refs;
    if (navigator.getCurrentRoutes().length === 1  ) {
       return false;
    }
    navigator.pop();
    return true;
  }

  _renderScene(route, navigator){
    if(route.id === 'login'){
      return (<Login navigator={navigator}/>);
    }
    if(route.id === 'home'){
      return (<Home navigator={navigator}/>);
    }
    if(route.id === 'camera'){
      return (<CameraPage navigator={navigator}/>);
    }
  }

  _configureScene(route, routeStack){
    if (Platform.OS === 'android') {
      return {
        ...Navigator.SceneConfigs.FloatFromBottomAndroid,
        gestures: {}
      }
    }
    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {}
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={{id: 'login'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene }
      />

    );
  }
}
