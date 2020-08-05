import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
export const MenuContainer = styled(LinearGradient).attrs({
  // colors: ['#F2F5FF', 'rgba(242, 245, 255, 1)', 'transparent'],
  // locations: [0, 0.5, 0.6],
})`
  margin-top: 16px;
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
  top: 6px;
  left: 44px;

  z-index: 1;
`;
export const HeaderBackground = styled(LinearGradient).attrs({
  colors: ['#E1E6F8', '#F2F5FF'],
})``;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
  padding-top: 20px;
  padding-bottom: 2px;
`;

export const TitleHeader = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-right: 8px;
  flex: 1;

  color: ${colors.primary};
`;

export const DateIndicator = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.fontDark};

  background-color: ${colors.primary};

  align-items: center;
  justify-content: center;
`;

export const Month = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 11px;
  color: ${colors.white};
  line-height: 12px;
  margin-top: 5px;
`;
export const Day = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 30px;
  color: ${colors.white};
  flex: 1;
  line-height: 31px;
`;
export const Year = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${colors.white};
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 2px;
`;
export const Body = styled.View`
  padding: 32px;
  padding-top: 12px;
`;
export const RowContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const IconItem = styled(Icon).attrs((props) => ({
  size: 28,
  color: colors.primary,
}))`
  margin-right: 8px;
  align-self: flex-start;
`;
export const Details = styled.View``;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  margin-bottom: 4px;
`;
export const NavigateButton = styled.TouchableOpacity`
  /* flex: 1; */
  flex-direction: row;
  box-shadow: 0px 0px 11px rgba(3, 3, 3, 0.25);
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 6px;
  border-radius: 4px;
  margin: 0 2px;
`;
export const ButtonTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.white};
`;
export const ButtonIcon = styled(Icon).attrs((props) => ({
  size: 24,
  color: colors.white,
}))`
  margin: 4px;
  margin-right: 4px;
`;
