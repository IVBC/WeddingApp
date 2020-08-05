import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Button = styled.View`
  padding: 8px;
  border-width: 3px;
  border-color: transparent;
`;

export const ContentButton = styled.View`
  margin-top: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextError = styled.Text`
  font-size: 10px;
  color: ${colors.red};
  align-self: center;
  /* margin: 5px 20px 5px; */
  /* font-weight: bold; */
  position: absolute;
  top: -13px;
  /* left: 0; */
  /* border: 1px solid #ffffff; */
`;

export const bgFill = {
  position: 'absolute',
  top: 0,
  left: 0,
};
