import styled from 'styled-components/native';
import StyledIconk from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import colors from '~/styles/colors';

const dimensions = Dimensions.get('window');
const deviceHeight = dimensions.height;
const deviceWidth = dimensions.width;

export const List = styled.FlatList.attrs(() => ({
  onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  removeClippedSubviews: true,
  initialNumToRender: 10,
  maxToRenderPerBatch: 100,
  // contentContainerStyle: { flexGrow: 1 },
}))`
  /* min-height: ${`${deviceHeight * 0.15}px`};
  max-height: ${`${deviceHeight * 0.4}px`}; */

  margin-bottom: 4px;
`;

export const Container = styled.View`

  /* flex: 1; */

  /* border: 1px solid ${colors.border};
  border-radius: 4px; */

  /* background-color: ${colors.secondary}; */

  margin-bottom: 4px;
  padding: 1px;
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: ${colors.primary};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  /* flex: 1; */
  padding: 6px 12px;
`;

export const Icon = styled(StyledIconk).attrs(({ color }) => ({
  size: 24,
  color: color || colors.white,
}))``;

export const TitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 12px;
  font-weight: 900;

  color: ${colors.white};
  margin-left: 10px;
`;
