
import React, {
  View,
  Text,
  Component,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../styles/weatherDetail';
var Icon = require('react-native-vector-icons/Ionicons')

export default class DetailBar extends Component {
  render(){
    let starIcon;
    this.props.favorite ? starIcon = "ios-star" : starIcon = "ios-star-outline";
    return(
      <View style={styles.overlay}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Icon style={styles.backBtn} name="ios-arrow-left" size={30} color="blue"/>
        </TouchableOpacity>
        <Text style={{padding:10, fontSize:20}}>{this.props.name}</Text>
        <TouchableOpacity onPress={this.props.toggleFavorite}>
          <Icon style={styles.backBtn} name={starIcon} size={25} color="blue"/>
        </TouchableOpacity>
      </View>
    );
  }
}