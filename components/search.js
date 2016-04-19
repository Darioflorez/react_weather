'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

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
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:5,}}
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

const styles = StyleSheet.create({
  searchBar: {
    padding:10,
  }
});
