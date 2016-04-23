'use strict';

import React, {
  Component,
  ToolbarAndroid,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

import SearchField from '../searchField'

var Icon = require('react-native-vector-icons/Ionicons');

export default class Toolbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleColor: 'white',
      subtitleColor: 'white',
      navIconName: "android-arrow-back",
      actions: toolbarActions,
      title: "React Weather",
    }
  };

  render() {
    /*<TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={"white"}
                    underlineColorAndroid ={"white"}/> */
    let searchInput;
    this.props.search ?
      searchInput = <SearchField setList={this.props.setList} resetList={this.props.resetList}/>:
      searchInput = null;

    return (
      <Icon.ToolbarAndroid
        title={this.state.title}
        titleColor={this.state.titleColor}
        navIconName={this.state.navIconName}
        style={styles.toolbar}
        elevation={4}
        actions={this.state.actions}
        overflowIconName="more">
        {searchInput}
      </Icon.ToolbarAndroid>
    );
  }
}

const toolbarActions = [
  { title: 'search', iconName: 'android-search', show: 'ifRoom' },
];

const placeholder = "Sök...                                                                                         ";

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

Toolbar.propTypes = { search: React.PropTypes.bool };
Toolbar.defaultProps = { search: true };
