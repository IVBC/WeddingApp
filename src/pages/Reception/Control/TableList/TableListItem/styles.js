import styled from 'styled-components/native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* background: #efeef4; */
  background: ${colors.bg};

  border: 2px solid ${colors.primary};
  box-shadow: -10px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 4px 12px;
  margin-bottom: 12px;
  /* flex: 1; */
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const TableContainer = styled.View`
  padding-right: 12px;
  margin-right: 12px;
  border-right-width: 2px;
  border-color: ${colors.primary};
`;

export const TableIndicator = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.primary};

  background-color: rgba(242, 245, 255, 0.63);

  align-items: center;
  justify-content: center;
`;

export const TableName = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
`;
export const NumberTable = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
`;

export const DetailContainer = styled.View`
  flex: 1;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const DataContainer = styled.View`
  /* background-color: ${colors.secondary}; */
  /* padding: 4px 12px;
  border-radius: 8px;

  border: 2px solid ${({ color }) => color || '#00398f'};
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25); */
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
  font-size: 28px;
  line-height: 33px;

  color: ${({ color }) => color || '#00398f'};
`;
export const ChildrenContainer = styled.View`
  flex-direction: row;
`;
export const ChildrenText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #9a9a9a;
  margin-right: 4px;
`;
export const ChildrenValue = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  color: #00398f;
`;
export const Icon = styled(IconMC).attrs(() => ({
  size: 24,
  color: colors.primary,
}))``;
