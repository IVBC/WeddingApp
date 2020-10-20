import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  /* height: 36px; */
  align-items: center;
  /* margin-bottom: 4px; */
  /* padding-top: 20px; */
  /* background-color: ${colors.bg}; */

`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled(BorderlessButton)`
  /* height: 100%; */
  padding: 12px 1px;
  justify-content: center;
  margin-left: 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  font-weight: bold;
  color: ${colors.fontLight};

  ${({ selected }) =>
    selected &&
    css`
      border-bottom-color: ${colors.primary};
      border-bottom-width: 2px;
      color: ${colors.primary};
    `}
`;
