import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header title="Galeria" openCamera={() => navigation.navigate('Camera')} />
      </View>
    );
  }
}
