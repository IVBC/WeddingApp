import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Control from '~/pages/Reception/Control';
import DetailControl from '~/pages/Reception/DetailControl';

const Stack = createStackNavigator();

export default function ControlRoutes() {
  return (
    <Stack.Navigator initialRouteName="Control">
      <Stack.Screen
        name="DetailControl"
        options={{
          headerShown: false,
        }}
        component={DetailControl}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Control"
        component={Control}
      />
    </Stack.Navigator>
  );
}
