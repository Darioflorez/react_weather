'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class CurrentLocation extends Component {

  constructor(props){
    super(props);
    // bind functions
    this._currentLocationPress = this._currentLocationPress.bind(this);
    this._renderFavourites = this._renderFavourites.bind(this);
    this._pressRow = this._pressRow.bind(this);

    this.state = {
      favouriteLocations: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  };
  _currentLocationPress(){
    console.log('current location pressed!');
    this.props.navigator.push({id: 'detail'})
  }

  _pressRow(rowID: number){
    console.log(rowID);
    this.props.navigator.push({id: 'detail'})
  }

  _renderFavourites(rowData: string, sectionID: number, rowID: number){
    return(
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='#dddddd'>
        <View style={styles.item}>
          <Text>
            {rowData}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  componentDidMount() {
    this.setState({
      favouriteLocations: this.state.favouriteLocations.cloneWithRows(['row1', 'row2', 'row3', 'row4', 'row5', 'row6'])});
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.currentLocation} onPress={this._currentLocationPress}>
          <View>

          </View>
        </TouchableOpacity>
        <ListView
          style={styles.list}
          dataSource={this.state.favouriteLocations}
          renderRow={this._renderFavourites}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 10,
    },
    currentLocation: {
      flex: 0.4,
      backgroundColor: '#06D6A0',
    },
    list: {
      marginTop: 10,
      borderColor: '#000000',
      borderWidth: 1,
      backgroundColor: '#ccfd4d',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor: '#000000',
      borderWidth: 1,
      backgroundColor: '#d3751d',
    }
});
