'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  CameraRoll,
  Image,
} from 'react-native';

import { styles } from '../styles/camera';
import Icon from 'react-native-vector-icons/Ionicons';

// credits: https://github.com/lwansbrough/react-native-camera
import Camera from 'react-native-camera';

export default class CameraPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      type:'back',
      imageUri: null,
    }
    this._fetchImages = this._fetchImages.bind(this);
  }

  _takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data)
        this._fetchImages();
      })
      .catch(err => console.error(err));
  }

  _switchCamera(){
    this.state.type === 'back' ? this.setState({type: 'front'}) : this.setState({type: 'back'})
  }

  componentDidMount() {
    this._fetchImages();
  }

  _fetchImages(){
    // pass 3 arg to getPhotos (how_many, when_success, when_fail)
    CameraRoll.getPhotos({first: 5})
    .then((data) => {
      //alert(data.edges[0].node.image.uri);
      this.setState({
        imageUri: data.edges[0].node.image
        /*photos: data.edges.map(asset =>
          asset.node.image.uri

        )*/
        //photos: {uri: data.edges[0].node.image.uri}
      })
      //alert(this.state.photos[0].node.image.uri);
    },
    (error) => {
      alert('Fail!');
    });
  }

  render() {
    console.log(this.state.imageUri);
    return (
      <View style={styles.container}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            type={this.state.type}>
          </Camera>
          <TouchableOpacity
            style={styles.pictureContainer}>
            <Image source={this.state.imageUri}
              style={styles.picture}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switch}
            onPress={this._switchCamera.bind(this)}>
            <Icon name={'arrow-swap'} size={20} color="#000"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._takePicture.bind(this)}
            style={styles.actionButton}>
              <Icon name={'camera'} size={50} color="#000" style={styles.icon}/>
          </TouchableOpacity>
      </View>

    );
  }
}
