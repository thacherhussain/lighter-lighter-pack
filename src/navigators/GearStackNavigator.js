import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import GearScreen from '../screens/GearScreen';

const GearStack = createStackNavigator({
  Gear : GearScreen,
});

GearStack.navigationOptions = {
  header: null,
}

export default createStackNavigator({
  GearStack,
});
