import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';
import Btn from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  /* flex-direction: row; */
  background-color: ${colors.bg};
`;

export const Button = styled(TouchableOpacity)`
  /* margin: 12px; */
  margin-bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d6e2ed;
  padding: 8px;

  border-color: ${colors.border};
  border-width: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.primary};
  /* font-weight: bold; */
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  background-color: ${colors.secondary};
  /* height: 40px; */
  background: #fff;
  border-radius: 8px;

  width: 100%;

  align-items: center;
  padding: 12px;

  margin: 8px 0 12px;

  border-width: 2px;
  border-color: ${colors.border};

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};
    `}
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}
`;
export const Icon = styled(IconMC).attrs(({ isErrored }) => ({
  name: 'key-variant',
  color: !isErrored ? colors.primary : colors.error,
  size: 24,
}))`
  margin-right: 8px;
`;
export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: colors.fontTransparent,
}))`
  flex: 1;
  font-size: 16px;

  color: ${colors.font};
`;
