import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {colors} from './colors';
const {height, width} = Dimensions.get('window');
var iconRadius = 70;
var iconCenter = (width/2)-iconRadius/2;

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
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
  switch:{
    position: 'absolute',
    top: 25,
    padding: 5,
    right:15,
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor:'#fff',
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
  }
})
