import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

export const ContainerModal = styled(LinearGradient).attrs({
  colors: ['#F2F5FF', '#CED4ED', '#F2F5FF'],
})`
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 8px;
`;
export const Message = styled.Text`
  color: ${colors.font};

  margin-bottom: 8px;
  padding: 24px;
  text-align: center;
`;

export const CloseIcon = styled(Icon).attrs(() => ({
  name: 'close',
  color: colors.primary,
  size: 32,
}))``;
export const ContainerList = styled.View``;

export const ConfirmButton = styled.View``;

export const ButtonContainer = styled.View`
  border-radius: 4px;
  /* border: 2px solid #6c89b2; */
`;

export const CloseButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */

  /* background: #e8e7ed; */
  padding: 4px;
  border-radius: 4px;
`;
