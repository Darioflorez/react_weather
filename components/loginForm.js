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
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button>
        <TouchableOpacity style={styles.btn} onPress={this.props.onLogin}>
          <Text>Login without Facebook</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    flex:0.5,
  },
  input:{
    height: 50,
    width: 300,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
  },
  btn: {    
    marginTop: 25,
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    fontFamily: 'Arial',
    fontSize: 15,
  },
  logoView:{
    flex: 0.5
  },
  logo:{
    height: 300,
  }
})
