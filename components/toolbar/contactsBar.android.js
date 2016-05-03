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
import { fetchWeather } from '../../js/fetchData';
import Icon from 'react-native-vector-icons/Ionicons';

const MENU = "android-menu";

export default class ContactsBar extends Component {

  constructor(props){
    super(props);
    this._onIconClicked = this._onIconClicked.bind(this);
    this._onMenuSelected = this._onMenuSelected.bind(this);
    
    this.state = {
      navIconName: MENU
    }
  };

  _onIconClicked(){
    switch (this.state.navIconName) {
      case MENU:
        this._onMenuSelected();
        break;
      default:
        break;
    }
  }

  _onMenuSelected(){
    // open drawer here
    console.log("_onMenuSelected");
    this.props.toggleDrawer();
  }

  render() {
    return (
      <Icon.ToolbarAndroid
        title='contacts'
        titleColor='white'
        navIconName={this.state.navIconName}
        onIconClicked={this._onIconClicked}
        style={styles.toolbar}
        elevation={4}>
      </Icon.ToolbarAndroid>
    );
  }
}
