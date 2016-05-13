'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LoginForm from './loginForm'
import LinearGradient from 'react-native-linear-gradient';
import FacebookSDK from '../js/facebookSDK';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this._onLogin = this._onLogin.bind(this);

    this._onLoginWithFacebookSDK = this._onLoginWithFacebookSDK.bind(this);

    this._onLoginSuccess = this._onLoginSuccess.bind(this);
  }
  _onLogin() {
    this.props.navigator.replace({id: 'home'});
  }

  _onLoginSuccess(response){
    console.log(response);
    this.props.navigator.push({
      id: 'home',
      passProps: {
        user: response
      }
    });
  }

  _onLoginWithFacebookSDK(){
    FacebookSDK.login()
      .then((result) =>{
        console.log('login success: ', result);
        FacebookSDK.getUserData(this._onLoginSuccess);
      })
      .catch((error) => {
        alert('login fail: ' + error);
      });
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
