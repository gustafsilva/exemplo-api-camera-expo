import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';


const MyHeader = ({ title, openCamera }) => {
  const cameraButton = (
    <TouchableOpacity onPress={openCamera}>
      <EvilIcons name="camera" size={35} color="white" />
    </TouchableOpacity>
  );

  return (
    <Header
      rightComponent={cameraButton}
      centerComponent={<Text style={styles.title}>{title}</Text>}
      backgroundColor="#70AB8F"
      placement="left"
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

MyHeader.propTypes = {
  /** Título que será exibido no cabeçalho. */
  title: PropTypes.string.isRequired,
  /** Função responsável por abrir tela de câmera. */
  openCamera: PropTypes.func.isRequired,
};

export default MyHeader;
