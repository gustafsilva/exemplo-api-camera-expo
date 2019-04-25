import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ConfigureScreen from '../screens/ConfigureScreen';

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Galeria',
      tabBarIcon: ({ tintColor }) => <EvilIcons color={tintColor} name="archive" size={40} />,
    }
  },
  Configure: {
    screen: ConfigureScreen,
    navigationOptions: {
      tabBarLabel: 'Configurações',
      tabBarIcon: ({ tintColor }) => <EvilIcons color={tintColor} name="gear" size={40} />,
    }
  },
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      height: 55,
      paddingTop: 3,
      paddingBottom: 3,
      justifyContent: 'space-around',
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  }
};

const Tab = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
export default createAppContainer(Tab);
