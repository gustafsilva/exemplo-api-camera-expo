import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Permissions,
  Camera,
  FileSystem,
} from 'expo';

import HeaderCameraScreen from './HeaderCameraScreen';
import FooterCameraScreen from './FooterCameraScreen';

const DIRECTORY_PHOTOS_NAME = `${FileSystem.documentDirectory}photos`;

class CameraScreen extends PureComponent {
  state = {
    type: 'back',
    permissionGranted: false,
    flashMode: 'off',
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionGranted: status === 'granted' });
  }

  componentDidMount = () => (
    FileSystem.makeDirectoryAsync(DIRECTORY_PHOTOS_NAME).catch(error => error)
  );

  toggleType = () => this.setState(state => ({ type: state.type === 'back' ? 'front' : 'back' }));

  toggleFlashMode = () => this.setState(state => ({ flashMode: state.flashMode === 'off' ? 'on' : 'off' }));

  takePhoto = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.savePhoto });
    }
  }

  savePhoto = async (photo) => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}${DIRECTORY_PHOTOS_NAME}/${Date.now()}.jpg`,
    });
  }

  render() {
    const {
      permissionGranted,
      type,
      flashMode,
    } = this.state;
    const { navigation } = this.props;

    if (permissionGranted === false) {
      return <Text>Ative as permissões de camêra para essa tela funcionar.</Text>;
    }

    return (
      <View style={styles.container}>
        <Camera
          style={styles.container}
          type={type}
          flashMode={flashMode}
          ref={(ref) => { this.camera = ref; }}
        />
        <HeaderCameraScreen navigation={navigation} />
        <FooterCameraScreen
          flashMode={flashMode}
          toggleFlashMode={this.toggleFlashMode}
          takePhoto={this.takePhoto}
          toggleType={this.toggleType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({ container: { flex: 1 } });

CameraScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CameraScreen;
