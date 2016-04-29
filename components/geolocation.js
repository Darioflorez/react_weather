/* eslint no-console: 0 */
'use strict';


var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render(){
      return React.createElement(Geolocation);
    }
  }
];

var watchID: number;

export default class Geolocation extends React.Component{

  constructor(props){
    super(props);
    this.state = ({
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    });
  }

  componentDidMount() {
    var _this = this;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        // Update position
        _this.setState({initialPosition});
      });

    watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      // Update position
      _this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(watchID);
  }

  render(){
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    height: 56,
    backgroundColor: '#ffffff',
  },
});

module.exports = Geolocation;
