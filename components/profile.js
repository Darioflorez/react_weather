'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

export default class Profile extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black', opacity:0.8, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <TouchableOpacity onPress={this.props.onClose}>
          <Text style={{color: 'white', padding: 10,fontSize: 20, borderWidth: 1, borderColor:'white', borderRadius:10}}> Tillbaka </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onLogout()}>
          <Text style={{color: 'white', marginTop: 20,padding: 10,fontSize: 20, borderWidth: 1, borderColor:'white', borderRadius:10}}> Logga ut </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
