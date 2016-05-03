
import { StyleSheet } from 'react-native'
import {colors} from './colors';

export const styles = StyleSheet.create({
  searchBar: {
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
  textInput: {
    height: 40,
    borderWidth: 1,
  }
});
