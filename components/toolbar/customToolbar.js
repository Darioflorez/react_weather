'use strict';

import React, {
  Component,
  ToolbarAndroid,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

var Icon = require('react-native-vector-icons/MaterialIcons');

export default class CustomToolbar extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <View style={styles.toolbar}>
        <View style={{}}>
          <Icon name="search" size={24} color="#ffffff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
    borderColor: 'red',
    borderWidth:4,
    backgroundColor: '#38aecc',
    height: 56, //Androids default value
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
