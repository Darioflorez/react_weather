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
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/toolbar';

const MENU = "android-menu";
const BACK = "android-arrow-back";

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this._onActionSelected = this._onActionSelected.bind(this);
    this._showSearchField = this._showSearchField.bind(this);
    this._onBack = this._onBack.bind(this);
    this._onIconClicked = this._onIconClicked.bind(this);
    this._onMenuSelected = this._onMenuSelected.bind(this);

    this.state = {
      titleColor: 'white',
      subtitleColor: 'white',
      navIconName: MENU,//"android-arrow-back",
      actions: toolbarActions,
      title: "React Weather",
      search: false,
    }
  };

  _showSearchField(){
    // change actions
    this.setState({navIconName:BACK,
      actions: null,
      title: null,
      search: true
    });
  }

  _onActionSelected(position){
    var _this = this;
    console.log("POSITION: ", position);
    switch (position) {
      case 0:
        // disable drawer
        _this._showSearchField();
        break;
      default:
    }
  }

  _onIconClicked(){
    switch (this.state.navIconName) {
      case MENU:
        this._onMenuSelected();
        break;
      case BACK:
        this._onBack();
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
  _onBack(){
    //hide search field
    // cancel the search. this have to be done by the father
    console.log("_onBack");
    this.setState({navIconName:MENU,
      actions: toolbarActions,
      title: "React Weather",
      search: false,
    });
    this.props.resetList();
    //enable drawer
  }

  render() {
    let searchInput;
    this.state.search ?
      searchInput = <SearchField setList={this.props.setList} resetList={this.props.resetList}/>:
      searchInput = null;

    return (
      <Icon.ToolbarAndroid
        title={this.state.title}
        titleColor={this.state.titleColor}
        navIconName={this.state.navIconName}
        onIconClicked={this._onIconClicked}
        style={styles.toolbar}
        elevation={4}
        actions={this.state.actions}
        onActionSelected={this._onActionSelected}
        overflowIconName="more">
        {searchInput}
      </Icon.ToolbarAndroid>
    );
  }
}

const toolbarActions = [
  { title: 'search', iconName: 'android-search', show: 'ifRoom' },
];

// Default props
SearchBar.propTypes = { search: React.PropTypes.bool };
SearchBar.defaultProps = { search: true };
