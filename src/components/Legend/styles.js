import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 4px;
`;

export const LegendOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LegendIcon = styled(Icon).attrs(() => ({
  size: 20,
}))`
  margin-right: 4px;
`;
export const LegendText = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Bold';
  color: #6c89b2;
`;
