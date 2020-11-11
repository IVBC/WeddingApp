import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { TouchableOpacity } from 'react-native';
import colors from '~/styles/colors';

export const Container = styled(TouchableOpacity)`
  height: 48px;
  background: ${({ background, disabled }) =>
    disabled ? colors.fontTransparent : background};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
`;
