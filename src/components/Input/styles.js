import styled, { css } from 'styled-components/native';
import IconMD from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  background: #fff;
  border-radius: 4px;

  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${colors.border};
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};
    `}
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.fontTransparent,
})`
  flex: 1;
  font-size: 16px;

  color: ${colors.fontLight};
  /* padding: 10px 20px; */
`;

export const TextError = styled.Text`
  color: ${colors.error};
  align-self: flex-start;
  /* margin: 5px 20px 0; */
  font-weight: bold;
  position: absolute;
  top: -22px;
  font-size: 13px;
  right: 0;
  /* background-color: green; */
`;

export const Icon = styled(IconMD)`
  margin-right: 10px;
`;
