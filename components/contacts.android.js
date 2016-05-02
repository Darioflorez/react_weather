'use strict';

import React, {
  PropTypes,
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// you can link this with:
// rnpm link 'react-native-contacts'
import Contacts from 'react-native-contacts';

import { styles } from '../styles/loginForm'

var Icon = require('react-native-vector-icons/FontAwesome')

export default class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }
  componentDidMount(){
    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        console.log("Error trying to get contacts", err)
      } else {
        console.log(contacts)
        this.setState({
          contacts: this.state.contacts.cloneWithRows(contacts)
        })
        console.log(this.state.contacts)
      }
    })
  }

  _renderRow(rowData, rowSeg, rowId){
    return(
      <View>
       <Text>{rowData.givenName}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.contacts}
        renderRow={this._renderRow}
      />
    );
  }
}