'use-strict';

import React, {
  View,
  Navigator,
  Platform,
} from 'react-native';

// Screens
import ContactsIndex from './contactsPage/contactsIndex';
import ContactDetail from './contactsPage/contactDetail';
import Weather from './weatherPage/weather';
import WeatherDetail from './weatherPage/weatherDetail';
import CameraPage from './camera';

var navigator;
React.BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

export default class AppNavigator extends React.Component {
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
      case 'weather':
      if(Platform.OS === 'ios'){
        return <Weather navigator={navigator}/>
      } else {
        return <Weather navigator={navigator} toggleDrawer={this.props.toggleDrawer}/>
      }
      case 'detail':
        return (<WeatherDetail favorite={route.favorite} header={route.header} navigator={navigator}/>);
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

  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav; }}
        initialRoute={{id: 'weather'}}
        renderScene={this._renderScene}
        configureScene={ this._configureScene}
      />

    );
  }
}
