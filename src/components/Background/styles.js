import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

import colors from '~/styles/colors';

const heightDevice = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  background: ${colors.bg};
  flex: 1;
`;

export const Background = styled.View`
  background: ${colors.primary};
  height: ${`${heightDevice * 0.11}px`};
`;

// export const Content = styled.View`
//   /* margin-top: ${`${heightDevice * 0.11 * -1 + 60}px`}; */

//   flex: 1;
//   /* background-color: red; */
// `;

export const Content = styled(LinearGradient).attrs({
  colors: ['#F2F5FF', '#CED4ED', '#F2F5FF'],
})`
  flex: 1;
`;

export const StatusBar = styled.StatusBar.attrs(() => ({
  backgroundColor: colors.bg,
  barStyle: 'dark-content',
}))``;
