import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CameraScreen from '../screens/CameraScreen';

const MainStackNavigator = {
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null,
    },
  },
};

export default createStackNavigator(MainStackNavigator);
