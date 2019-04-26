import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import { EvilIcons } from '@expo/vector-icons';

const ICONS_SIZE = 35;

const HeaderCameraScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <EvilIcons color="white" name="close" size={ICONS_SIZE} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Configure')}>
        <EvilIcons color="white" name="gear" size={ICONS_SIZE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    top: Constants.statusBarHeight,
    width: '100%',
    padding: 10,
  },
});

HeaderCameraScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HeaderCameraScreen;
