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

import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

var Icon = require('react-native-vector-icons/Ionicons')

export default class Profile extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <View style={{flex:1,}}>
        <LinearGradient colors={['#F7F7F7', 'black']} style={{flex:0.8, opacity:0.9}} />
        <View style={{flex:0.2, width:width, backgroundColor:'#F7F7F7',justifyContent: 'flex-start', alignItems: 'center'}}>
          <TouchableOpacity onPress={this.props.onClose}>
            <Icon style={{paddingRight:10}}name="ios-arrow-down" size={50} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', padding:10, borderRadius:10, backgroundColor: 'white'}}onPress={this.props.onLogout()}>
            <Icon style={{paddingRight:10}}name="ios-arrow-left" size={30} color="#007AFF"/>
            <Text style={{color: 'black',padding: 2,fontSize: 20 }}> Logga ut </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
