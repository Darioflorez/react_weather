'use-strict';

import React, {
  BackAndroid,
} from 'react-native';

const AndroidBackButton = (navigator) => {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator.getCurrentRoutes().length === 1  ) {
       return false;
    }
    navigator.pop();
    return true;
  });
}

module.exports = {
  AndroidBackButton : AndroidBackButton
}
