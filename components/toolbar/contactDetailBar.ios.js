'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../styles/contactDetailBar'

var Icon = require('react-native-vector-icons/Ionicons')

export default class ContactDetailBar extends Component {

  constructor(props){
    super(props);
    this._onBack = this._onBack.bind(this);
  };
  
  _onBack(){
    this.props.navigator.resetTo({id: 'contacts'})
  }

  render() {
    return (
      <View style={styles.topBar}>
          <TouchableOpacity style={styles.btn} onPress={this._onBack}>
            <Icon name="ios-arrow-back" size={30} color="#34AADC"/>
            <Text style={styles.backLabel}> All Contacts </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
