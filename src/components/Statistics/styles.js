import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 12px 0px;

  /* background: rgba(255, 252, 252, 0.5); */
  background: ${colors.bg};

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const Data = styled.View`
  background-color: ${colors.secondary};
  padding: 4px 12px;
  border-radius: 8px;
  margin: 0 4px;
  flex: 1;

  border: 2px solid ${({ color }) => color || '#00398f'};
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25);
`;

export const DataText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #9a9a9a;
`;
export const DataValue = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;

  color: ${({ color }) => color || '#00398f'};
`;
export const DataChildren = styled.View`
  margin-top: 8px;
  margin-right: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const DataValueChildren = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #00398f;
`;
