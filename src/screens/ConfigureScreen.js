import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';

export default class ConfigureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header title="Configurações" openCamera={() => navigation.navigate('Camera')} />
        <Text> Configuração </Text>
      </View>
    );
  }
}
