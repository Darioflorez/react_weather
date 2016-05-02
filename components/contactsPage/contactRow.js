'use strict';

import React, {
  PropTypes,
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome')

import { styles } from '../../styles/contactRow';

export default class ContactRow extends React.Component {
  constructor(){
    super();
  }

  render() {
    const contact = this.props.contact;
    return (
      <View style={styles.container}>
        <Text style={styles.firstName}>{contact.givenName}</Text>
        <Text style={styles.lastName}>{contact.familyName}</Text>
      </View>
    );
  }
}
