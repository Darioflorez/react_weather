
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'blue',
  },
  NavBar: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  backBtn: {
    padding:10,
  },
  info: {
    flex: 0.3,
    backgroundColor: 'white',   
  },
  list: {
    flex: 0.6,
    backgroundColor: 'white',
  },
})