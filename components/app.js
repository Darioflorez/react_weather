'use strict';

import React, {
  PropTypes,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TabBarIOS,
  TouchableOpacity,
} from 'react-native';

import Weather from './weather';
import Contacts from './contacts';
import Camera from './camera';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles/loginForm'




export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'weather'
    };
  }

  render() {
    const route = this.state.route;
    console.log(this.props)
    return (
      <TabBarIOS
        tintColor="#34AADC"
        barTintColor="#F7F7F7"
      >
        <Icon.TabBarItem
          iconName="ios-partlysunny-outline"
          selectedIconName="ios-partlysunny"
          selected={route === 'weather'}
          onPress={() => {
            this.setState({
              route: 'weather',
            });
          }}>
          <Weather onLogout={this.props.onLogout}/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="ios-camera-outline"
          selectedIconName="ios-camera"
          selected={route === 'camera'}
          onPress={() => {
            this.setState({
              route: 'camera',
            });
          }}>
          <Camera />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="ios-people-outline"
          selectedIconName="ios-people"
          selected={route === 'contacts'}
          onPress={() => {
            this.setState({
              route: 'contacts',
            });
          }}>
          <Contacts />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

