'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../styles/contacts'
import { fetchWeather } from '../../js/fetchData';

var Icon = require('react-native-vector-icons/Ionicons')

export default class ContactsBar extends Component {

  constructor(props){
    super(props);
  };

  render() {
    return (
      <View style={styles.topBar}>
        <TextInput
          style={styles.input}
          placeholder={'search'}
          maxLength={12}
          onSubmitEditing={(text) => {}}
          />
          <TouchableOpacity>
            <Icon name="ios-plus-empty" size={30} color="#34AADC"/>
          </TouchableOpacity>
      </View>
    );
  }
}
