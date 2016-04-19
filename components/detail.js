'use strict';

import React, {
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';
import RNChart from 'react-native-chart';

export default class WeatherDetail extends React.Component {
  render() {
    let output;
    if(this.props.route === 'map'){
      output = <MapView 
        style={{flex:1}}
        initialRegion={{
          latitude: 59.3293,
          longitude: 18.0686,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}/>;
    }
    else{
      output = <RNChart style={{flex:1}}
                    chartData={chartData}
                    verticalGridStep={5}
                    xLabels={xLabels}
                 />;
    }
    return (
      <View style={{flex:1}}>
        { output }
      </View>
    );
  }
}

const chartData = [
    {
        name: 'LineChart',
        color: 'gray',
        lineWidth: 2,
        //highlightIndices: [1, 2],   // The data points at indexes 1 and 2 will be orange
        //highlightColor: 'orange',
        showDataPoint: true,
        data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
    }
];

const xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];