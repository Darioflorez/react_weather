'use strict';

import React, {
  Component,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/toolbar';

export default class DetailBar extends Component {

  constructor(props){
    super(props);
    this._onActionSelected = this._onActionSelected.bind(this);
    this.state = {
      titleColor: 'white',
      subtitleColor: 'white',
      navIconName: "android-arrow-back",
      title: this.props.name,
    }
  };

  _onActionSelected(position){
    console.log("POSITION: ", position);
    switch (position) {
      case 0:
        this.props.toggleFavorite();
        break;
      default:

    }
  }

  render() {
    let favorites;
    this.props.favorite ? favorites = "android-favorite" : favorites = "android-favorite-outline";

    const toolbarActions = [
      { title: 'favorites', iconName: favorites, show: 'ifRoom'},
    ];

    return (
      <Icon.ToolbarAndroid
        title={this.state.title}
        titleColor={this.state.titleColor}
        navIconName={this.state.navIconName}
        onIconClicked={this.props.onBack}
        style={styles.toolbar}
        elevation={4}
        actions={toolbarActions}
        onActionSelected={this._onActionSelected}
        overflowIconName="more">
      </Icon.ToolbarAndroid>
    );
  }
}
