import styled from 'styled-components/native';
import StyledIconk from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const List = styled.FlatList.attrs(() => ({
  // onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  // removeClippedSubviews: true,
  // initialNumToRender: 10,
  // maxToRenderPerBatch: 100,
  contentContainerStyle: { flexGrow: 1 },
}))``;

export const Container = styled.View`
  margin: 0px 12px;
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: ${colors.primary};
  margin-bottom: 8px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 5px 12px;
  border-right-width: 1px;
  border-color: ${colors.bg};
`;

export const Icon = styled(StyledIconk).attrs(({ color }) => ({
  size: 24,
  color: color || colors.white,
}))``;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 13px;
  font-weight: 900;

  color: ${colors.white};
  margin-left: 10px;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  border-radius: 4px;
  /* border: 2px solid #6c89b2; */
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  flex: 1;
  /* background: #e8e7ed; */
  padding: 0 4px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  color: ${colors.white};
  margin-right: 0px;
  margin-left: 6px;
  font-family: 'Roboto-Medium';
`;
