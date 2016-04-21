'use strict';

import React, {
  Component,
  TouchableHighlight,
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons')

export default class SearchResult extends Component {
  constructor(props){
    super(props);
    this._renderRow = this._renderRow.bind(this)
    this._rowPress = this._rowPress.bind(this)
  }
  _rowPress(){
    this.props.navigator.push({id: 'detail'});
    this.props.resetList();
  }
  _renderRow(rowData, sectionID, rowID){
    return (
      <TouchableHighlight onPress={this._rowPress} underlayColor={'#D1EEFC'} >
        <View style={{padding:10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end',borderBottomWidth: 1, borderBottomColor: '#C7C7CC'}}>
          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize: 18}}>{ rowData.name }</Text>
            <Text>{ rowData.country }</Text>
          </View>
          <View>
            <Icon name="ios-arrow-right" size={30} color="blue"/>
          </View>
        </View>
      </TouchableHighlight>
      );
  }
  render() {
    console.log(this.props.data)
    return (
      <ListView
        dataSource={this.props.data}
        renderRow={this._renderRow}
      />
    );
  }
}
