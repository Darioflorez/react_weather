
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    header: {
      fontSize: 30,
      padding: 10,
      color: 'white',
    },
    currentLocation: {
      flex: 0.4,
      backgroundColor: 'skyblue',
      padding: 20,
    },
    currentView:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tempeture:{
      fontSize: 50,
      fontWeight: '100',
      fontFamily: 'Helvetica Neue',
      color: 'white',
      paddingLeft: 10,
    },
    list: {
    },
    item: {
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7CC',
      height: 56,
    },
    favoritesText: {
      fontWeight: '300',
      fontFamily: 'Helvetica Neue',
    }
});
