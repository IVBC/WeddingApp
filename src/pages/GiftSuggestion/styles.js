import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/styles/colors';

import logoCamicado from '~/assets/camicado.png';
import logoBemol from '~/assets/bemol.png';

const dimensions = Dimensions.get('window');
const heightDevice = dimensions.height;
const widthDevice = dimensions.width;

export const TitleHeader = styled.View`
  justify-content: flex-start;
  align-items: center;

  /* background-color: red; */
`;

export const Body = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 40px;
  color: #dac610;
  font-family: 'Sevillana-Regular';
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #4b6fa1;
  font-family: 'Roboto-Regular';
  text-align: center;
  padding: 12px;
  margin: 0px 32px;
  margin-bottom: 8px;
`;

export const Button = styled.TouchableOpacity`
  margin: 8px 32px;
  box-shadow: 0px 0px 4px rgba(3, 3, 3, 0.25);
`;

export const BackgroundButton = styled(LinearGradient).attrs({
  colors: ['#cad5e7', 'rgba(242, 245, 255, 1)'],
  locations: [0, 0.4],
})`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 82px;
  border-radius: 8px;
  /* margin-left: 24px;
  margin-right: 24px;
  z-index: 0;
  border-radius: 10px; */
`;

export const LogoBemol = styled.Image.attrs(() => ({
  source: logoBemol,
}))`
  /* width: 100%; */
  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  /* resize-mode: contain; */

  width: ${`${105}px`};
  height: ${`${Math.round((105 * 55) / 96)}px`};

  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  resize-mode: contain;


`;

export const LogoCamicado = styled.Image.attrs(() => ({
  source: logoCamicado,
}))`
  /* width: 100%; */
  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  /* resize-mode: contain; */

  width: ${`${153}px`};
  height: ${`${Math.round((153 * 30) / 130)}px`};

  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  resize-mode: contain;


`;

export const BankDepositContainer = styled.View`
  margin: 24px 0px;
  margin-top: 16px;
`;
export const HeaderBankDeposit = styled.View`
  padding: 8px;
`;

export const TitleBankDeposit = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  color: #4b6fa2;
  margin-bottom: 10px;
`;
export const BodyBankDeposit = styled(LinearGradient).attrs({
  colors: ['#cad5e7', 'rgba(242, 245, 255, 1)'],
  locations: [0, 0.4],
})`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: red;
  padding: 12px 16px;
`;
export const IconCard = styled(Icon).attrs((props) => ({
  size: 36,
  color: colors.primary,
}))`
  margin-right: 4px;
`;

export const Col1 = styled.View``;
export const Col2 = styled.View``;
export const DetailText = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: ${colors.primary};
`;
