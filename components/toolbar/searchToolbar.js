'use strict';

import React, {
  Component,
  ToolbarAndroid,
  StyleSheet
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');

export default class SearchToolbar extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <Icon.ToolbarAndroid
        title="React Weather"
        titleColor="white"
        navIconName="android-arrow-back"
        style={styles.toolbar}
        elevation={4}
        actions={[
          { title: 'search', iconName: 'android-search', show: 'ifRoom' },
        ]}
        overflowIconName="more"
      />
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor: '#C7C7CC',
    height: 56, //Androids default value
  },
});
