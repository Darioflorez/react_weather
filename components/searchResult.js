'use strict';

import React, {
  Component,
  StyleSheet,
  ListView,
  Text,
} from 'react-native';

export default class SearchResult extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.data)
    return (
      <ListView
        dataSource={this.props.data}
        renderRow={(rowData) => <Text>{rowData.name}</Text>}
      />
    );
  }
}
