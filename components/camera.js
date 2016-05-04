'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

// credits: https://github.com/lwansbrough/react-native-camera
import Camera from 'react-native-camera';

export default class CameraPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  _takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }


  render() {

    return (
      <View style={{flex:1, padding:10}}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <View style={{backgroundColor:'white'}}>
              <Text style={styles.capture} onPress={this._takePicture.bind(this)}>[CAPTURE]</Text>
            </View>
          </Camera>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
