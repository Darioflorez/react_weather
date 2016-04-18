'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LoginForm from './loginForm'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this._onLogin = this._onLogin.bind(this);
  }
  _onLogin() {
    this.props.navigator.push({id: 'home'});
  }
  render() {
    return (
      <LoginForm onLogin={this._onLogin}/>
    );
  }
}

const styles = StyleSheet.create({
  
})
