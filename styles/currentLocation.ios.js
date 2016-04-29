
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',

    },
    header: {
      fontSize: 40,
      padding: 10,
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      color: 'white',
    },
    tempeture:{
      fontSize: 50,
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      color: 'white',
      paddingLeft: 10,
    },
    currentLocation: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7CC',
      backgroundColor: '#34AADC',
    },
    currentView:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    list: {

    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7CC',
    }
});