import { StyleSheet } from 'react-native'
import {colors} from './colors';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.appBackground
  },
  topBar: {
    paddingTop:25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: colors.rowSeparator,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    height: 30,
    borderColor: '#C7C7CC',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginRight: 10,
  },
})
