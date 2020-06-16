import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '~/components/TabBar';

import Guests from '~/pages/Guests';
import Menu from '~/pages/Menu';
import Location from '~/pages/Location';
import DeliveriesRoutes from '~/routes/Deliveries.routes';
import colors from '~/styles/colors';
import GiftSuggestion from '~/pages/GiftSuggestion';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export default function MainTab() {
  return (
    <>
      <StatusBar backgroundColor={colors.bg} barStyle="dark-content" />
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="guestList"
          options={{
            tabBarLabel: 'Convidados',
            tabBarIcon: 'people',
          }}
          component={Guests}
        />
        <Tab.Screen
          name="restaurantMenu"
          options={{
            tabBarLabel: 'Cardápio',
            tabBarIcon: 'restaurant-menu',
          }}
          component={Menu}
        />
        <Tab.Screen
          name="photo"
          options={{
            tabBarLabel: 'Tirar foto',
            tabBarIcon: 'photo-camera',
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Address"
          options={{
            tabBarLabel: 'Endereço',
            tabBarIcon: 'location-on',
          }}
          component={Location}
        />
        <Tab.Screen
          name="GiftSuggestion"
          options={{
            tabBarLabel: 'Sugestão',
            tabBarIcon: 'redeem',
          }}
          component={GiftSuggestion}
        />
      </Tab.Navigator>
    </>
  );
}
