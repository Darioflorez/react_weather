'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

import { styles } from '../styles/search'
import { fetchWeather } from '../js/fetchData';

var Icon = require('react-native-vector-icons/Ionicons')

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    // bind functions
    this._onChangeText = this._onChangeText.bind(this);
    this.state = {
        text: '',
        list: [],
    }
  };

  _onChangeText(input: string){
    this.setState({text: input});
    let _this = this;
    
    if(this.state.text.length > 2){
        //console.log(this.state.text.length);
        fetchWeather(this.state.text)
        .then(function(response){
          // Show this data in a list
           _this.props.setList(response);
           //console.log("Success!", response);
        }, function(error){
          console.error("Failed!", error);
        });
    }else{
      this.props.resetList();
    }
  }

  _onSubmitEditing(){

  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={'search'}
          onChangeText={(text) => this._onChangeText(text)}
          value={this.state.text}
          maxLength={12}
          onSubmitEditing={(text) => {}}
          />
          <Icon style={{paddingLeft: 5}} name="ios-search" size={25} color="blue"/>
      </View>
    );
  }
}
