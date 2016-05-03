'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../../styles/toolbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ContactDetailBar extends Component {

  constructor(props){
    super(props);
    this._onBack = this._onBack.bind(this);
  };

  _onBack(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <Icon.ToolbarAndroid
        title={this.props.title}
        titleColor='white'
        navIconName="android-arrow-back"
        onIconClicked={this._onBack}
        style={styles.toolbar}
        elevation={4}>
      </Icon.ToolbarAndroid>
    );
  }
}
