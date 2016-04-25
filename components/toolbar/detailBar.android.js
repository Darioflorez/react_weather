'use strict';

import React, {
  Component,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');

export default class DetailBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleColor: 'white',
      subtitleColor: 'white',
      navIconName: "android-arrow-back",
      actions: toolbarActions,
      title: this.props.city,
    }
  };



  render() {
    return (
      <Icon.ToolbarAndroid
        title={this.state.title}
        titleColor={this.state.titleColor}
        navIconName={this.state.navIconName}
        onIconClicked={this.props.onBack}
        style={styles.toolbar}
        elevation={4}
        actions={this.state.actions}
        overflowIconName="more">
      </Icon.ToolbarAndroid>
    );
  }
}

const toolbarActions = [
  { title: 'favorites', iconName: 'android-favorite-outline', show: 'ifRoom' },
];

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor: '#38aecc',
    height: 56, //Androids default value
  },
  textInput: {
    height: 10,
    borderWidth: 10
  }
});
