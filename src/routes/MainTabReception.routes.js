import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '~/components/TabBar';

import colors from '~/styles/colors';
import Control from '~/pages/Reception/Control';
import Scanner from '~/pages/Reception/Scanner';
import ControlRoutes from './Control.routes';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export default function MainTabReception() {
  return (
    <>
      <StatusBar backgroundColor={colors.bg} barStyle="dark-content" />
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Control"
          options={{
            tabBarLabel: 'Controle',
            tabBarIcon: 'playlist-add-check',
          }}
          component={ControlRoutes}
        />
        <Tab.Screen
          name="Scanner"
          options={{
            tabBarLabel: 'Escanear',
            tabBarIcon: 'stay-current-portrait',
          }}
          component={Scanner}
        />
      </Tab.Navigator>
    </>
  );
}
