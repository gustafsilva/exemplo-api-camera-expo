import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/navigations';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
