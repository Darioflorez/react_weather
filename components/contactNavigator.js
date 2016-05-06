'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';

// Screens
import ContactsIndex from './contactsPage/contactsIndex';
import ContactDetail from './contactsPage/contactDetail';

export default class ContactNavigator extends React.Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackButton = this._handleBackButton.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

  _handleBackButton(){
    const {navigator} = this.refs;
    if (navigator.getCurrentRoutes().length === 1  ) {
       return false;
    }
    navigator.pop();
    return true;
  }

  _renderScene(route, navigator){
    switch (route.id) {
      case 'contacts':
      if(Platform.OS === 'ios'){
        return <ContactsIndex navigator={navigator}/>
      } else {
        return <ContactsIndex navigator={navigator} toggleDrawer={this.props.toggleDrawer}/>
      }
      case 'contactDetail':
        return (<ContactDetail navigator={navigator} data={route.data}/>);
      default:
        break;

    }
  }

  _configureScene(route, routeStack){
    if (Platform.OS === 'android') {
      return {
        ...Navigator.SceneConfigs.FloatFromBottomAndroid,
        gestures: {}
      }
    }
    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {}
    }
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={{id: 'contacts'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene }
      />

    );
  }
}
