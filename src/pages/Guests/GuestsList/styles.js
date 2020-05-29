import styled from 'styled-components/native';
import StyledIconk from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const List = styled.FlatList.attrs(() => ({
  onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  removeClippedSubviews: true,
  initialNumToRender: 10,
  maxToRenderPerBatch: 100,
  contentContainerStyle: { flexGrow: 1 },
}))``;

export const Container = styled.View`
  margin: 32px;
  flex: 1;

  border: 1px solid ${colors.border};
  border-radius: 5px;

  background-color: ${colors.secondary};

  margin-bottom: 28px;
  padding: 1px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.bg};
  padding: 16px 16px;
  /* background-color: red; */
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Icon = styled(StyledIconk).attrs(({ color }) => ({
  size: 24,
  color: color || colors.primary,
}))``;

export const TitleText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const ButtonContainer = styled.View`
  border-radius: 10px;
  border: 2px solid #6c89b2;
  background: #e8e7ed;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  height: 26px;
  background: #e8e7ed;
  padding: 4px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
  margin-right: 1px;
  margin-left: 6px;
`;
