import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const ContainerModal = styled(LinearGradient).attrs({
  colors: ['#F2F5FF', '#CED4ED', '#F2F5FF'],
})`
  padding: 16px;
  border-radius: 8px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const TitleHeader = styled.Text`
  color: ${colors.font};
  margin-right: 8px;
`;

export const CloseIcon = styled(Icon).attrs(() => ({
  name: 'close',
  color: colors.primary,
  size: 32,
}))``;
export const ContainerList = styled.View``;

export const ConfirmButton = styled.TouchableOpacity``;

export const ButtonContainer = styled.View`
  border-radius: 4px;
  /* border: 2px solid #6c89b2; */
`;

export const CloseButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */

  /* background: #e8e7ed; */
  padding: 4px;
  border-radius: 4px;
`;

export const ButtonConfirmContainer = styled.View`
  border-radius: 4px;
  /* border: 2px solid #6c89b2; */
`;

export const ButtonConfirm = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  /* flex: 1; */
  background: #6c89b2;
  padding: 10px 10px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  margin-right: 4px;
`;
