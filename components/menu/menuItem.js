'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

// "#38aecc"
export default class MenuItem extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
    var selectedTitleStyle = this.props.selected && styles.selectedTitle;

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Icon name={icon} size={29} color="#38aecc" style={styles.icon}/>
        <Text style={[styles.title, selectedTitleStyle]} >
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: "grey",
  },
  selectedTitle: {
    color: "#38aecc",
  },

});
