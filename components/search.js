'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

import { styles } from '../styles/search'

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    // bind functions
    this._onChangeText = this._onChangeText.bind(this);
    this.state = {
        text: ''
    }
  };

  _onChangeText(text: string){
    console.log(text);
    this.setState({text})
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
