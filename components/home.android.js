'use strict';

import React, {
  Component,
  View,
  DrawerLayoutAndroid,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/toolbar';
import MenuItem from './menu/menuItem';
import AppNavigator from './appNavigator';

export default class Home extends Component {

  constructor(props){
    super(props);
    this._onIconClicked = this._onIconClicked.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
    this._openDrawer = this._openDrawer.bind(this);
    this._toggleDrawer = this._toggleDrawer.bind(this);
    this._weatherSelected = this._weatherSelected.bind(this);
    this._cameraSelected = this._cameraSelected.bind(this);
    this._contactsSelected = this._contactsSelected.bind(this);
    this.drawerOpen = false;
    // drawerLockMode enum('unlocked', 'locked-closed', 'locked-open')
    this.state = {
      drawerLockMode: 'unlocked',
      view:'weather',
    }
  };

  _onIconClicked(){
    console.log("Icon clicked");
    this._toggleDrawer();
  }

  _closeDrawer(){
    this.drawerOpen = false;
  }

  _openDrawer(){
    this.drawerOpen = true;
  }

  _toggleDrawer(){
    if(this.drawerOpen){
        this.refs['DRAWER'].closeDrawer();
        this._closeDrawer();
        return;
    }
    this.refs['DRAWER'].openDrawer();
    this._openDrawer();
  }

  _weatherSelected(){
    this._toggleDrawer();
    this.refs['NAVIGATOR'].navigateTo('weather');
    // change component
  }

  _cameraSelected(){
    this._toggleDrawer();
    this.refs['NAVIGATOR'].navigateTo('camera');
    // change component
  }

  _contactsSelected(){
    this._toggleDrawer();
    this.refs['NAVIGATOR'].navigateTo('contacts');
    //change component
  }

  render() {
    const {height, width} = Dimensions.get('window');
    var navigationView = (

      <ScrollView style={{flex: 1, backgroundColor: 'white',}}>
      <View style={{height:height/3, backgroundColor:'grey'}}></View>
      <MenuItem
        onPress={this._weatherSelected}
        title="Weather"
        selected={this.state.view === 'weather'}
        selectedIcon="android-cloud"
        icon="android-cloud"/>

      <MenuItem
        onPress={this._cameraSelected}
        title="Camera"
        selected={this.state.view === 'camera'}
        selectedIcon="android-camera"
        icon="android-camera"/>

    <MenuItem
      onPress={this._contactsSelected}
      title="Contacts"
      selected={this.state.view === 'contacts'}
      selectedIcon="android-person"
      icon="android-person"/>

      </ScrollView>
  );

// Show views with drawer and wihout drawer {this._renderContent()}
    return(
      <View style={{flex:1}}>

        <DrawerLayoutAndroid
          ref={'DRAWER'}
          drawerWidth={280}
          drawerLockMode={this.state.drawerLockMode}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          onDrawerClose= {this._closeDrawer}
          onDrawerOpen={this._openDrawer}>

          <AppNavigator
            ref={'NAVIGATOR'}
            toggleDrawer={this._toggleDrawer}/>

        </DrawerLayoutAndroid>
      </View>

    );
  }
}
