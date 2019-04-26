import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Camera,
} from 'expo';

import HeaderCameraScreen from './HeaderCameraScreen';
import FooterCameraScreen from './FooterCameraScreen';
import { takePhoto } from '../../api/camera';
import { makeDirectoryPhotos } from '../../api/files';
import { getPermissionCamera } from '../../api/authMobile';

class CameraScreen extends PureComponent {
  state = {
    type: 'back',
    permissionGranted: false,
    flashMode: 'off',
  };

  async componentWillMount() {
    const status = await getPermissionCamera();
    this.setState({ permissionGranted: status === 'granted' });
  }

  componentDidMount = () => makeDirectoryPhotos();

  toggleType = () => this.setState(state => ({ type: state.type === 'back' ? 'front' : 'back' }));

  toggleFlashMode = () => this.setState(state => ({ flashMode: state.flashMode === 'off' ? 'on' : 'off' }));

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
          takePhoto={() => takePhoto(this.camera)}
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
