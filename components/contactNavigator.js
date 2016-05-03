'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Platform,
} from 'react-native';

// Screens
import ContactsIndex from './contactsPage/contactsIndex';
import ContactDetail from './contactsPage/contactDetail';

export default class ContactNavigator extends React.Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
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
    return {
      ...Navigator.SceneConfigs.HorizontalSwipeJump,
      gestures: {}
    }
  }

  render() {
    return (
      <Navigator
        ref='contacts'
        initialRoute={{id: 'contacts'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene }
      />

    );
  }
}
