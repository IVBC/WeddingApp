import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '~/styles/colors';
import HeaderLeft from '~/components/HeaderLeft';

import Dashboard from '~/pages/Dashboard';

import DeliveryDetail from '~/pages/DeliveryDetail';

import { ProblemForm, ProblemList } from '~/pages/DeliveryDetail/Problems';

import DeliverConfirm from '~/pages/DeliveryDetail/DeliveryConfirm';
import Control from '~/pages/Reception/Control';
import DetailControl from '~/pages/Reception/DetailControl';

const Stack = createStackNavigator();

export default function ControlRoutes() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerBackTitleVisible: false,
      //   headerTitleAlign: 'center',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //     fontSize: 18,
      //   },
      //   headerTintColor: colors.fontDark,
      //   headerTransparent: true,
      //   headerLeft: () => <HeaderLeft />,
      // }}
      initialRouteName="Control"
    >
      {/* <Stack.Screen
        name="Delivery"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetail}
      />
      <Stack.Screen
        name="ProblemForm"
        options={{
          title: 'Informar Problema',
        }}
        component={ProblemForm}
      />
      <Stack.Screen
        name="ProblemsList"
        options={{
          title: 'Visualizar Problemas',
        }}
        component={ProblemList}
      /> */}
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
