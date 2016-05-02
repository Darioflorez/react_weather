import {
  StyleSheet,
  Dimensions,
   } from 'react-native'

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backBtn: {
    padding:10,
  },
  info: {
    flex: 0.4,
    backgroundColor: 'white',
  },
  list: {
    flex: 0.6,
    backgroundColor: 'white',
  },
  switchMode:{
    position: 'absolute',
    top: 180,
    left: width-45,
    backgroundColor: 'transparent',
  },
  overlay: {
    opacity: 0.9,
    position: 'absolute',
    paddingTop: 10,
    top:0,
    left: 0,
    width: width,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  rowView: {
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CC',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
