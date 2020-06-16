import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '~/styles/colors';

import logoHeader from '~/assets/Logo_Cabecalho.png';

const dimensions = Dimensions.get('window');
const heightDevice = dimensions.height;
const widthDevice = dimensions.width;
export const Container = styled.View`
  /* background: ${colors.primary}; */
  /* height: ${`${heightDevice * 0.11}px`}; */
  align-items: center;
`;

export const LogoHeader = styled.Image.attrs(() => ({
  source: logoHeader,
}))`
  /* width: 100%; */
  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  /* resize-mode: contain; */

  width: ${`${widthDevice - 48}px`};
  height: ${`${Math.round(((widthDevice - 48) * 82) / 327)}px`};

  /* tint-color: ${colors.white}; */
  /* margin-bottom: 42px; */
  resize-mode: contain;


`;
