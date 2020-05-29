import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#F2F5FF', '#CACEDC', '#F2F5FF'],
})`
  flex: 1;
`;
