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

var Icon = require('react-native-vector-icons/Ionicons')

export default class Profile extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <View style={{flex:1,}}>
        <View style={{flex:0.4, opacity: 0.5,backgroundColor:'black'}}/>
        <View style={{flex:0.6,width:width, backgroundColor:'#34AADC',justifyContent: 'space-between', alignItems: 'center'}}>
          <TouchableOpacity onPress={this.props.onClose}>
            <Icon style={{paddingRight:10}}name="ios-arrow-down" size={60} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', marginBottom: 60,padding:10,borderWidth: 1,borderColor:'white',borderRadius:10}} onPress={this.props.onLogout}>
            <Icon style={{paddingRight:10}}name="ios-arrow-left" size={30} color="white"/>
            <Text style={{color: 'white',padding: 2,fontSize: 20 }}> Logga ut </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
