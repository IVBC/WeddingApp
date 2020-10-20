import styled, { css } from 'styled-components/native';

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

  background: #6c89b2;
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  flex: 1;
`;

export const IconHeader = styled(IconMC).attrs(() => ({
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
  /* flex: 1; */

  /* background: #e8e7ed; */
  padding: 4px;
  border-radius: 4px;
`;

export const List = styled.FlatList.attrs(() => ({
  // onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  // removeClippedSubviews: true,
  // initialNumToRender: 10,
  // maxToRenderPerBatch: 100,
  contentContainerStyle: { flexGrow: 1 },
}))`
  /* margin-top: 8px; */
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
export const FilterOption = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #9a9a9a;
  /* identical to box height */

  text-align: center;
  padding: 12px 10px 2px;

  ${({ active }) =>
    active &&
    css`
      border-bottom-color: ${colors.primary};
      border-bottom-width: 2px;
      color: ${colors.primary};
    `}
`;
