'use strict';

import React, {
  PropTypes,
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons')

import { styles } from '../../styles/contactRow';

export default class ContactRow extends React.Component {
  constructor(){
    super();
    this._pressRow = this._pressRow.bind(this);
  }

  _pressRow(rowID: number, rowData: string){
    this.props.navigator.push({id: 'contactDetail', data: rowData})
  }

  // Ta bort arrow for android
  render() {
    const rowData = this.props.rowData;
    const rowID = this.props.rowId;
    return (
      <TouchableOpacity onPress={() => this._pressRow(rowID, rowData)} style={styles.container}>
        <View style={styles.name}>
          <Text style={styles.firstName}>{rowData.givenName}</Text>
          <Text style={styles.lastName}>{rowData.familyName}</Text>
        </View>
        <Icon name="ios-arrow-right" size={28} color="#34AADC"/>
      </TouchableOpacity>
    );
  }
}
