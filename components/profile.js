'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

const {height, width} = Dimensions.get('window');
import { styles } from '../styles/profile';

var Icon = require('react-native-vector-icons/Ionicons')

export default class Profile extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <View style={{flex:1,}}>
        <View style={{flex:1, opacity: 0.9,backgroundColor:'black'}}/>
        <TouchableOpacity style={styles.exit} onPress={this.props.onClose}>
          <Icon style={{paddingRight:10}} name="ios-close-empty" size={60} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.onLogout()}>
          <Icon style={{paddingRight:10}}name="ios-arrow-left" size={30} color="white"/>
          <Text style={{color: 'white',padding: 2,fontSize: 20 }}> Logga ut </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
