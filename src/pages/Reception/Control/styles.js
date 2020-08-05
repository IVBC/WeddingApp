import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #6c89b2;
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const IconHeader = styled(Icon).attrs(() => ({
  size: 18,
  color: colors.white,
}))`
  margin-right: 8px;
`;

export const HeaderTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;

export const ButtonContainer = styled.View`
  border-left-width: 1px;
  border-color: ${colors.white};
`;

export const RefreshIcon = styled(Icon).attrs(() => ({
  name: 'refresh',
  color: colors.white,
  size: 24,
}))``;

export const RefreshButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */

  /* background: #e8e7ed; */
  padding: 4px;
  border-radius: 4px;
`;
