import { StyleSheet } from 'react-native'
import {colors} from './colors';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.rowSeparator,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:colors.appBackground,
  },
  name:{
    flexDirection: 'row',
    paddingTop:5,
  },
  firstName: {
    paddingRight: 5,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  lastName: {
    fontWeight: '400',
    fontFamily: 'Helvetica Neue',
  },
})
