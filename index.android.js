/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './components/app';
//import PlayGround from './components/playGround';

class react_weather extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('react_weather', () => react_weather);
