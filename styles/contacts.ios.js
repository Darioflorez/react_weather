import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  topBar: {
    paddingTop:25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CC',
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