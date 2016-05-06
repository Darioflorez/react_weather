import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {colors} from './colors';
const {height, width} = Dimensions.get('window');
var iconRadius = 70;
var iconCenter = (width/2)-iconRadius/2;

export const icons = { btn: "ios-circle-filled", switch: "camera" }
export const colors = { icon: 'white'};

export const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height,
    width: width
  },
  actionButton: {
    position: 'absolute',
    bottom: 25,
    padding: 5,
    left:iconCenter,
    height: iconRadius,
    width: iconRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch:{
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  exit:{
    position: 'absolute',
    top: 25,
    right: 25,
  },
  pictureContainer: {
    position: 'absolute',
    top: 25,
    left:15,
    height: iconRadius,
    width: iconRadius,
    borderWidth: 1,
    margin: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture:{
    height: iconRadius-8,
    width: iconRadius-8,
  },
  icon: {
    color: 'white',
  }
})
