import React from 'react';
import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import options from './options';

// Import Screens
import SplashScreen from 'Views/Splash';
import WelcomeScreen from 'Views/Welcome';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator initialRouteName="">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={options.headerHidden}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={options.headerHidden}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
