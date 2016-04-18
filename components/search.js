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
    this.state = {
        text: ''
    }
  };

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#cefcba'
  }
});
