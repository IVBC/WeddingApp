import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '~/styles/colors';

export const TitleHeader = styled.View`
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  /* background-color: red; */
`;
export const TitleMenu = styled.Text`
  font-size: 40px;
  color: #dac610;
  font-family: 'Sevillana-Regular';
`;
export const Wrapper = styled.View`
  flex: 1;
`;
export const MenuContainer = styled(LinearGradient).attrs({
  // colors: ['#F2F5FF', 'rgba(242, 245, 255, 1)', 'transparent'],
  // locations: [0, 0.5, 0.6],
})`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
  z-index: 0;
  border-radius: 10px;
`;
export const MenuIcon = styled(Icon).attrs((props) => ({
  size: 36,
  color: colors.primary,
}))`
  position: absolute;
  top: -14px;
  left: 44px;

  z-index: 1;
`;

export const MenuList = styled.FlatList.attrs(() => ({
  onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  removeClippedSubviews: true,
  initialNumToRender: 10,
  maxToRenderPerBatch: 100,
  contentContainerStyle: { flexGrow: 1 },
}))``;

export const DishContainer = styled.View`
  padding: 16px;
`;

export const DishTitle = styled.Text`
  font-family: 'Sevillana-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;
  text-align: center;

  color: #dac610;
  margin-bottom: 8px;
`;

export const DishDescription = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #5b759b;
`;
