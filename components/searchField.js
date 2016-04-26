'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/search'
import { fetchWeather } from '../js/fetchData';

export default class SearchField extends Component {

  constructor(props){
    super(props);
    // bind functions
    this._onChangeText = this._onChangeText.bind(this);
    this.state = {
        text: '',
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
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        underlineColorAndroid ={"white"}
        autoFocus={true}
        keyboardType={"web-search"}
        onChangeText={(text) => this._onChangeText(text)}
        value={this.state.text}
        maxLength={12}
        onSubmitEditing={(text) => {}}
        />
    );
  }
}

const placeholder = "Sök...                                                                 ";
