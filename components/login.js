'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LoginForm from './loginForm'
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this._onLogin = this._onLogin.bind(this);
  }
  _onLogin() {
    this.props.navigator.replace({id: 'home'});
  }
  render() {
    return (
      <LinearGradient colors={['#EF4DB6', '#5856D6']} style={{flex:1}}>
        <LoginForm onLogin={this.props.onLogin}/>
      </LinearGradient>
    );
  }
}
