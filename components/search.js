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
    this.state = {
        text: ''
    }
  };

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={'search'}
          onChangeText={(text) => this.setState({text})}
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
