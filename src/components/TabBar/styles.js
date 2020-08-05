import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import colors from '~/styles/colors';

const widthDevice = Dimensions.get('window').width;
export const BarButton = styled.TouchableOpacity`
  flex: 1;
  height: 55px;
  padding: 4px;

  align-items: center;
  justify-content: center;
`;

export const Container = styled.SafeAreaView`
  flex-direction: row;

  background-color: ${colors.bg};

  border-top-color: ${colors.border};
  border-width: 2px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  elevation: 10;
  bottom: 0;
`;

export const BarIcon = styled(Icon).attrs((props) => ({
  size: 24,
  color: props.isFocused ? '#2F80ED' : colors.grey,
}))``;

export const Label = styled.Text`
  color: ${(props) => (props.isFocused ? '#2F80ED' : colors.grey)};
  font-size: 10px;
  flex: 1;
  /* font-weight: bold; */
`;

export const BarButtonCamera = styled.TouchableOpacity`
  /* flex: 1; */
  height: 60px;
  width: 60px;
  top: -15px;
  /* left: ${`${widthDevice / 2 - 30}px`}; */

  /* right: 0; */
  align-items: center;
  justify-content: center;
  position: absolute;
  /* border: 2px solid #333; */
  border-radius: 30px;
  background-color: ${colors.primary};
`;

export const BarIconCamera = styled(Icon).attrs(() => ({
  size: 34,
  color: colors.bg,
}))``;
