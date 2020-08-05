import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

import MainTabRoutes from './MainTab.routes';
import MainTabReceptionRoutes from './MainTabReception.routes';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return (
    <Stack.Navigator>
      {!isSigned ? (
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SignIn}
        />
      ) : (
        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={MainTabReceptionRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
