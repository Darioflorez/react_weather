'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  LoginManager,
} from 'react-native-fbsdk';

import LoginForm from './loginForm'
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this._onLogin = this._onLogin.bind(this);
    this._onLoginWithFacebookSDK = this._onLoginWithFacebookSDK.bind(this);
  }
  _onLogin() {
    this.props.navigator.replace({id: 'home'});
  }

  _onLoginWithFacebookSDK(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
            this.props.navigator.replace({id: 'home'});
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <LinearGradient colors={['#EF4DB6', '#5856D6']} style={{flex:1}}>
        <LoginForm
          onLogin={this._onLogin}
          onLoginWithFacebookSDK={this._onLoginWithFacebookSDK}/>
      </LinearGradient>
    );
  }
}
