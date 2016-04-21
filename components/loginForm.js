'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/loginForm'

var Icon = require('react-native-vector-icons/FontAwesome')

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image resizeMode={'contain'} style={styles.logo} source={require('../images/app_logo.png')} />
        </View>
        <View style={styles.inputView}>
          <Icon.Button onPress={this.props.onLogin} name="facebook" backgroundColor="#3b5998">
            <Text style={styles.btnLabel}>Login with Facebook</Text>
          </Icon.Button>
          <TouchableOpacity style={styles.btn} onPress={this.props.onLogin}>
            <Text style={styles.btnLabel}>Login without Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

