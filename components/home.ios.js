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

import WeatherNavigator from './weatherNavigator';
import ContactNavigator from './contactNavigator';
import Camera from './camera';

import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/loginForm'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'weather'
    };
  }

  render() {
    const route = this.state.route;
    //console.log(this.props)
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="#F7F7F7"
        style={{borderWidth: 1, borderColor: '#8E8E93'}}
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
          <WeatherNavigator onLogout={this.props.onLogout}/>
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
          <ContactNavigator />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}