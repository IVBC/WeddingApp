import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import CountDown from '../CountDown';

import {
  Container,
  BarButton,
  BarButtonCamera,
  Label,
  BarIcon,
  BarIconCamera,
} from './styles';

function TabBar({ state, descriptors, navigation }) {
  return (
    <>
      <CountDown />
      <Container>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            // eslint-disable-next-line no-nested-ternary
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return index !== 2 ? (
            <BarButton
              key={route.name}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {options.tabBarIcon && (
                <BarIcon isFocused={isFocused} name={options.tabBarIcon} />
              )}
              <Label isFocused={isFocused}>{label}</Label>
            </BarButton>
          ) : (
            <BarButton key={route.name}>
              <BarButtonCamera
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                {/* {options.tabBarIcon && (

                  )} */}
                <BarIconCamera isFocused={isFocused} name="add-a-photo" />
                {/* <Label isFocused={isFocused}>{label}</Label> */}
              </BarButtonCamera>
            </BarButton>
          );
        })}
      </Container>
    </>
  );
}

TabBar.propTypes = {
  state: PropTypes.shape({
    routes: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  descriptors: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default memo(TabBar);
