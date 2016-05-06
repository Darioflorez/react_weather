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
  Platform
} from 'react-native';

import { styles, icons } from '../styles/camera';

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
    this._switchCamera = this._switchCamera.bind(this);
    this._onExit = this._onExit.bind(this);
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

  _onExit(){
    this.props.navigator.replace({id: 'home'});
  }

  componentDidMount() {
    this._fetchImages();
    console.log("DidMount");
  }

  componentWillUnmount(){
    console.log("WillUMount");
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
    var ios_output;
    Platform === 'ios' ? ios_output = (<TouchableOpacity
      style={styles.exit}
      onPress={this._onExit}>
      <Icon name={"ios-close-outline"} size={30} color="white"/>
    </TouchableOpacity>) : ios_output = null

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
            onPress={this._switchCamera}>
            <Icon name={icons.switch} size={30} color="white"/>
          </TouchableOpacity>
          {ios_output}
          <TouchableOpacity onPress={this._takePicture.bind(this)}
            style={styles.actionButton}>
              <Icon name={icons.btn} size={60} color="white" style={styles.icon}/>
          </TouchableOpacity>
      </View>
    );
  }
}
