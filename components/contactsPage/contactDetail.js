'use strict';

import React, {
  PropTypes,
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ContactDetailBar from '../toolbar/contactDetailBar';

import { styles } from '../../styles/contactDetail';

export default class ContactDetail extends React.Component {
  constructor(){
    super();
  }

  render() {
    const contact = this.props.contact;
    return (
      <View style={{flex:1}}>
        <ContactDetailBar navigator={this.props.navigator} />
      </View>
    );
  }
}
