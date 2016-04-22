
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
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7CC',
    },
    currentView:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
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
