import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '~/components/Button';

import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalIndicator: false,
  contentContainerStyle: { flex: 1 },
}))``;

export const Content = styled.View`
  margin-top: 8px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
`;

export const CameraContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const PhotoContainer = styled.View`
  flex: 1;
  border-radius: 4px;
`;

export const Preview = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-top: 8px;

  color: ${colors.primary};
`;

export const SubmitButton = styled(Button).attrs(() => ({
  background: colors.primary,
}))`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ButtonCamera = styled.TouchableOpacity`
  margin-top: -90px;
  background: #0000004d;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  align-self: center;
  margin-bottom: 22px;
`;

export const ButtonCameraIcon = styled(Icon).attrs((props) => ({
  size: props.size ? props.size : 25,
  color: props.color ? props.color : colors.bg,
}))``;
