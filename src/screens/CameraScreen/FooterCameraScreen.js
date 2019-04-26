import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { EvilIcons, Entypo } from '@expo/vector-icons';

const ICONS_SIZE = 35;

const FooterCameraScreen = (props) => {
  const {
    flashMode,
    toggleFlashMode,
    toggleType,
    takePhoto,
  } = props;
  const colorFlashIcon = flashMode === 'off' ? 'white' : 'yellow';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFlashMode}>
        <Entypo color={colorFlashIcon} name="flash" size={ICONS_SIZE - 5} />
      </TouchableOpacity>

      <TouchableOpacity onPress={takePhoto} style={styles.buttonSavePhoto}>
        <View style={styles.iconSavePhoto} />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleType}>
        <EvilIcons color="white" name="refresh" size={ICONS_SIZE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 10,
    width: '100%',
    padding: 10,
  },
  buttonSavePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'silver',
    width: 70,
    height: 70,
    opacity: 0.7,
  },
  iconSavePhoto: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});

FooterCameraScreen.propTypes = {
  flashMode: PropTypes.string.isRequired,
  toggleFlashMode: PropTypes.func.isRequired,
  toggleType: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
};

export default FooterCameraScreen;
