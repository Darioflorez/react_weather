/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';

import App from './components/app';
import Camera from './components/camera';
import Contacts from './components/contacts';
import Login from './components/login';

class react_weather extends Component {
  constructor(){
    super();
    this.state = {
      route: Login
    };
    this._changeState = this._changeState.bind(this);
    this._onLogin = this._onLogin.bind(this);
    this._onLogout = this._onLogout.bind(this);
  }

  _changeState(nextRoute){
    this.setState({route: nextRoute});
  }

  _onLogin(){
    this._changeState(App);
  }

  _onLogout(){
    this._changeState(Login);
  }

  render() {
    const component = this.state.route;
    return (
        React.createElement(component, {onLogin: this._onLogin, onLogout: this._onLogout})
    );
  }
}

AppRegistry.registerComponent('react_weather', () => react_weather);
