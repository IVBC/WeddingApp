import styled from 'styled-components/native';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${colors.primary};
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  flex: 1;
`;

export const IconHeader = styled(IconMC).attrs(() => ({
  size: 22,
  color: colors.white,
}))`
  margin-left: 8px;
  margin-bottom: 4px;
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
  border-right-width: 1px;
  border-color: ${colors.white};
`;

export const Icon = styled(IconMC).attrs(() => ({
  name: 'chevron-left',
  color: colors.white,
  size: 24,
}))``;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px;
  border-radius: 4px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  background-color: ${colors.secondary};
  height: 40px;
  background: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  width: 100%;

  align-items: center;
  padding: 0 12px;

  margin: 0 0 8px;
`;
export const SearchIcon = styled(IconMC).attrs(() => ({
  name: 'magnify',
  color: colors.primary,
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
