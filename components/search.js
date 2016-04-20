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
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
