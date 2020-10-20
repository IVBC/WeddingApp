import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

import { Form as Unform } from '@unform/mobile';
import logo from '../../assets/logo.png';
import logoFlor from '../../assets/flor_sign.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import colors from '~/styles/colors';

const dimensions = Dimensions.get('window');
const deviceHeight = dimensions.height;
const deviceWidth = dimensions.width;

export const Container = styled(LinearGradient).attrs({
  colors: ['#F2F5FF', '#E4E9FB'],
})`
  flex: 1;
`;

export const Content = styled.ScrollView``;

export const Header = styled(Animated.View)`
  /* padding: 16px; */
  /* margin-top: 16px; */
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Footer = styled(Animated.View)`
  padding: 0 0 12px;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
`;

// styled.View`
//   flex: 1;
//   background: ${colors.primary};
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   /* padding: 20px; */
// `;

export const LogoFlor = styled.Image.attrs(() => ({
  source: logoFlor,
}))`
  /* width: 100%; */
  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  /* resize-mode: contain; */

  width: ${`${deviceWidth}px`};
  height: ${`${Math.round((deviceWidth * 118) / 343)}px`};

  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  resize-mode: contain;


`;

export const Logo = styled.Image.attrs(() => ({
  source: logo,
}))`
  width: ${`${deviceWidth - 60}px`};
  height: ${`${Math.round(((deviceWidth - 60) * 46) / 155)}px`};

  /* tint-color: ${colors.white}; */
  margin-bottom: 42px;
  resize-mode: contain;

`;

export const Form = styled(Unform)`
  /* margin-top: 37px;
  align-self: stretch;
  background: red;
  background-color: red; */
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.14);
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  /* Aqui é so a cor */
  background: ${colors.primary};
  align-self: stretch;
`;
