import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {colors} from './colors';
const {height, width} = Dimensions.get('window');
var iconRadius = 70;
var iconCenter = (width/2)-iconRadius/2;

export const icons = { btn: "camera", switch: "arrow-swap" };
//export const colors = { icon: 'black'};

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
    borderRadius: iconRadius,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch:{
    position: 'absolute',
    top: 25,
    right:15,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureContainer: {
    position: 'absolute',
    top: 25,
    padding: 5,
    left:15,
    height: iconRadius,
    width: iconRadius,
    borderRadius: iconRadius,
    borderWidth: 4,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture:{
    height: iconRadius-4,
    width: iconRadius-4,
    borderRadius: iconRadius-4,
  },
  icon: {
    color: 'black',
  }
})
