import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: 42px;
  background-color: #dde3ef;
  width: 100%;
  flex-direction: row;
`;
export const Content = styled.View`
  margin-top: 4px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 12px;
`;
export const IconTime = styled(Icon).attrs((props) => ({
  size: 24,
  color: colors.primary,
}))`
  margin-right: 8px;
`;

export const TextTitle = styled.Text`
  font-weight: bold;
  color: ${colors.primary};
`;
export const TextTime = styled.Text`
  /* font-weight: bold; */
  color: ${colors.primary};
`;
