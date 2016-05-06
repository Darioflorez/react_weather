
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  btn:{
    position: 'absolute',
    bottom: 60,
    left: (width/2)-65,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:'white',
    borderRadius:10,
  },
  exit:{
    position: 'absolute',
    top: 15,
    right: 15,
  }
})


