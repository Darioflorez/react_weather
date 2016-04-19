
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 10,
    },
    header: { 
      fontSize: 30,
      padding: 10,
    },
    currentLocation: {
      flex: 0.4,
      borderColor: 'black',
      borderWidth: 1,
    },
    currentView:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    list: {
      marginTop: 10,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    }
});