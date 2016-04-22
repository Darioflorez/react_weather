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
  constructor(){
    super()
    this.state = {
      temps: null,
    }
  }
  componentWillReceiveProps(props){
    console.log(props)
    let list = props.rawData.map((obj) => obj.temp )
    this.setState({temps: list})
    //console.log(list)
  }
  render() {
    let output;
    if(this.props.route === 'map'){
      if(this.props.region){
        output = <MapView 
        style={{flex:1}}
        initialRegion={ this.props.region }/>;
      }
      else{
        <Text>Loading...</Text> 
      }
    }
    else{
      output = <RNChart style={{flex:1, marginTop: 70,}}
                    chartData={
                      [{
                        name: 'LineChart',
                        color: 'gray',
                        lineWidth: 2,
                        showDataPoint: true,
                        data: this.state.temps,
                      }]
                    }
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

const xLabels = ['1','2','3','4','5','6','7'];