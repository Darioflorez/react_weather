'use strict';

import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import SearchBar from './search';
import CurrentLocation from './currentLocation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <CurrentLocation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    }
});
