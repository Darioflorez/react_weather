'uses-strict'

import { PropTypes } from 'react';
import { requireNativeComponent, View, Component } from 'react-native';


var props = {
   name: 'MPLineChart',
   propTypes:{
    data: PropTypes.object,
    ...View.propTypes,
  },
};

module.exports = requireNativeComponent('MPLineChart', props);