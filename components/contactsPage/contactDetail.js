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
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/contactDetail';
import {AndroidBackButton} from '../../js/BackAndroid';
import Communications from 'react-native-communications';

export default class ContactDetail extends React.Component {
  constructor(){
    super();
  }

  _renderNumbers(data, index){
    return(
      <View key={index} style={styles.infoSegment}>
      <View style={styles.info}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={styles.number}>{data.number}</Text>
      </View>
      <View style={styles.communication}>
        <TouchableOpacity onPress={() => { Communications.text(data.number) }}>
          <Icon name="ios-chatbubble-outline" style={{paddingRight: 15,}}size={28} color="#34AADC"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Communications.phonecall(data.number, false) }}>
          <Icon name="ios-telephone-outline" size={28} color="#34AADC"/>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

  // we could abstract to an Item class the logic for choosing the items to use
  _renderEmails(data, index){
    console.log(data);
    return(
      <View key={index} style={styles.infoSegment}>
      <View style={styles.info}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={styles.number}>{data.email}</Text>
      </View>
      <View style={styles.communication}>
      <TouchableOpacity onPress={() => Communications.email([data.email],null,null,'My Subject','My body text')}>
        <Icon name="ios-email-outline" size={28} color="#34AADC"/>
      </TouchableOpacity>
      </View>
      </View>
    );
  }

  render() {
    const contact = this.props.data;
    console.log(this.props.data)
    const firstName = contact.givenName || "";
    const lastName = contact.familyName || "";
    const name = firstName + " " + lastName;

    return (
      <View style={styles.container}>
        <ContactDetailBar navigator={this.props.navigator}/>
        <Text style={styles.header}> {name} </Text>
        <Text style={styles.infoLabel}>Phones</Text>
        {contact.phoneNumbers.map((index,data) => this._renderNumbers(index,data) )}
        <Text style={styles.infoLabel}>Emails</Text>
        {contact.emailAddresses.map((index,data) => this._renderEmails(index,data) )}
      </View>
    );
  }
}
