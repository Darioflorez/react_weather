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
import ContactRow from './contactRow';
import ContactsBar from '../toolbar/contactsBar';

import { styles } from '../../styles/contacts'

export default class ContactsIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
    this._renderRow = this._renderRow.bind(this);
  }
  componentDidMount(){
    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        console.log("Error trying to get contacts", err)
      } else {
        //console.log(contacts)
        this.setState({
          contacts: this.state.contacts.cloneWithRows(contacts)
        })
      }
    })
  }

  _renderRow(rowData, rowSeg, rowId){
    return(
      <ContactRow rowData={rowData} rowId={rowId} navigator={this.props.navigator}/>
    );
  }

  // In android we have to pass a function for controlling the menu
  render() {
    return (
      <View style={{flex:1}}>
        <ContactsBar toggleDrawer={this.props.toggleDrawer}/>
        <ListView
          dataSource={this.state.contacts}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}
