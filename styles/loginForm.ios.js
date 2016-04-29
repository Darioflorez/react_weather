
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    flex:0.5,
  },
  input:{
    height: 50,
    width: 300,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
  },
  btn: {
    marginTop: 25,
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'transparent',
  },
  logoView:{
    flex: 0.5
  },
  logo:{
    height: 300,
  }
})
