'use strict';

import React, {
  Component,
  View,
  DrawerLayoutAndroid,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';

// Screens
import ContactsIndex from './contactsPage/contactsIndex';
import ContactDetail from './contactsPage/contactDetail';
import Weather from './weatherPage/weather';
import WeatherDetail from './weatherPage/weatherDetail';
import CameraPage from './camera';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/toolbar';
import MenuItem from './menu/menuItem';

var navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  navigator.pop();
  return true;
});

export default class Home extends Component {

  constructor(props){
    super(props);
    this._onIconClicked = this._onIconClicked.bind(this);
    this._onActionSelected = this._onActionSelected.bind(this);
    this._closeDrawer = this._closeDrawer.bind(this);
    this._openDrawer = this._openDrawer.bind(this);
    this._toggleDrawer = this._toggleDrawer.bind(this);
    this._weatherSelected = this._weatherSelected.bind(this);
    this._cameraSelected = this._cameraSelected.bind(this);
    this._contactsSelected = this._contactsSelected.bind(this);
    this._renderScene = this._renderScene.bind(this);
    this.drawerOpen = false;
    // drawerLockMode enum('unlocked', 'locked-closed', 'locked-open')
    this.state = {
      drawerLockMode: 'unlocked'
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

  _onActionSelected(position){
    var _this = this;
    console.log("POSITION: ", position);
    switch (position) {
      case 0:
        console.log("Position Clicked: 0");
        break;
      default:
    }
  }

  _weatherSelected(){
    console.log("Home Selected!");
    this._toggleDrawer();
    navigator.resetTo({id: 'weather'});
    // change component
  }

  _cameraSelected(){
    console.log("Contacts Selected!");
    this._toggleDrawer();
    navigator.push({id: 'camera'});
    // change component
  }

  _contactsSelected(){
    console.log("Contacts Selected!");
    this._toggleDrawer();
    navigator.resetTo({id: 'contacts'});
    // change component
  }

  render() {
    const {height, width} = Dimensions.get('window');
    var navigationView = (

      <ScrollView style={{flex: 1, backgroundColor: 'white',}}>
      <View style={{height:height/3, backgroundColor:'black'}}></View>
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

          <Navigator
            ref={(nav) => { navigator = nav; }}
            initialRoute={{id: 'weather'}}
            renderScene={this._renderScene}
            configureScene={ this._configureScene}
          />

        </DrawerLayoutAndroid>
      </View>

    );
  }

  // this function can be implemented in a separate class
  // for better cross-platform usability
  _renderScene(route, navigator){
    switch (route.id) {
      case 'weather':
      if(Platform.OS === 'ios'){
        return <Weather navigator={navigator}/>
      } else {
        return <Weather navigator={navigator} toggleDrawer={this._toggleDrawer}/>
      }
      case 'detail':
        return (<WeatherDetail favorite={route.favorite} header={route.header} navigator={navigator}/>);

      case 'contacts':
      if(Platform.OS === 'ios'){
        return <ContactsIndex navigator={navigator}/>
      } else {
        return <ContactsIndex navigator={navigator} toggleDrawer={this._toggleDrawer}/>
      }
      case 'contactDetail':
        return (<ContactDetail navigator={navigator} data={route.data}/>);
      case 'camera':
        return (<CameraPage navigator={navigator}/>);
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

}
