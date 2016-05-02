'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  DrawerLayoutAndroid,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/toolbar';
import MenuItem from './menu/menuItem';
import WeatherNavigator from './weatherNavigator';

const MENU = "android-menu";
const BACK = "android-arrow-back";

// "android-cloud-circle"
// "android-camera"
// "android-contacts"

export default class PlayGround extends Component {

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
    this._renderContent = this._renderContent.bind(this);
    this.drawerOpen = false;
    // drawerLockMode enum('unlocked', 'locked-closed', 'locked-open')
    this.state = {
      navIconName: MENU,
      view: 'weather',
      drawerLockMode: 'unlocked'
    }
  };

  componentDidMount(){

  }


  _onIconClicked(){
    console.log("Icon clicked");
    this._toggleDrawer();
  }

  _closeDrawer(){
    this.drawerOpen = false;
    this.setState({navIconName: MENU})
  }

  _openDrawer(){
    this.drawerOpen = true;
    this.setState({navIconName: BACK})
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
    this.setState({view: 'weather'})
    // change component
  }

  _cameraSelected(){
    this.setState({view: 'camera'});
    this._toggleDrawer();
    console.log("Camera Selected!");
    // change component
  }

  _contactsSelected(){
    console.log("Contacts Selected!");
    this._toggleDrawer();
    this.setState({view: 'contacts'});
    // change component
  }

  _renderContent(){
    switch (this.state.view) {
      case 'camera':
          return (<Camera/>);
      case 'contacts':
          return (<Contacts/>);
      case 'weather':
          return (<WeatherNavigator toggleDrawer={this._toggleDrawer}/>);
      default:
        break;

    }
  }

  render() {
    var navigationView = (
      <ScrollView style={{flex: 1, backgroundColor: 'white',}}>

      <MenuItem
        onPress={this._weatherSelected}
        title="Weather"
        selected={this.state.view === 'weather'}
        selectedIcon="android-cloud-circle"
        icon="android-cloud-outline"/>
      <Separator/>

      <MenuItem
        onPress={this._cameraSelected}
        title="Camera"
        selected={this.state.view === 'camera'}
        selectedIcon="android-cloud-circle"
        icon="android-camera"/>
      <Separator/>

    <MenuItem
      onPress={this._contactsSelected}
      title="Contacts"
      icon="android-contacts"/>
    <Separator/>

      </ScrollView>
  );

// Show views with drawer and wihout drawer
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

          {this._renderContent()}

        </DrawerLayoutAndroid>
      </View>

    );
  }
}

class Contacts extends React.Component{
  render(){
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center',
    backgroundColor: 'slateblue'}}>
        <Text>
          Contacts
        </Text>
      </View>
    );
  }
}

class Camera extends React.Component{
  render(){
    return (
      <View style={{flex:1, alignItems:'center', justifyContent: 'center',
    backgroundColor: 'wheat'}}>
        <Text>
          Camera
        </Text>
      </View>
    );
  }
}

class Separator extends React.Component{
  render(){
    return (
      <View style={
            {height: 1,
            backgroundColor: '#C7C7CC',
            flex: 1,
            marginLeft: 15}
          } />
    );
  }
};
