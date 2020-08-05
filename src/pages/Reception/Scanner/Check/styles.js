import styled from 'styled-components/native';
import StyledIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 12px 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  background: #6c89b2;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px;
`;

export const ContainerText = styled.View`
  /* background-color: red; */
  flex: 1;
  justify-content: space-between;
`;
export const TextTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* line-height: 30px; */
  /* width: 100px; */
  color: #ffffff;
  margin-bottom: 4px;
`;
export const PasswordContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  /* background: red; */
  /* flex-grow: 1; */
  /* align-items: flex-end; */
`;
export const PasswordLabel = styled.Text`
  font-family: Roboto;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 12px;
  margin-right: 8px;
  text-transform: uppercase;
  /* margin-bottom: 4px; */
  /* line-height: 21px; */

  color: #ffffff;
`;
export const PasswordValue = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* line-height: 26px; */
  text-transform: uppercase;

  color: #ffffff;
  /* flex: 1; */
`;

export const TableContainer = styled.View`
  /* padding-right: 12px; */
  /* margin-right: 12px; */
  /* border-right-width: 2px;
  border-color: ${colors.primary}; */
`;

export const TableIndicator = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.primary};

  background-color: ${colors.bg};

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

export const List = styled.FlatList.attrs(() => ({
  onEndReachedThreshold: 0.3,
  showsVerticalScrollIndicator: false,
  removeClippedSubviews: true,
  initialNumToRender: 10,
  maxToRenderPerBatch: 100,
  // contentContainerStyle: { flexGrow: 1 },
}))`
  margin-bottom: 4px;
`;

export const Button = styled.TouchableOpacity`
  /* margin-top: 10px; */
  /* Aqui é so a cor */
  /* background: #e8e7ed; */
  border: 1px solid #e8e7ed;
  background: ${colors.primary};
  border-radius: 4px;

  align-self: stretch;
  padding: 12px;
`;

export const TextButton = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  /* line-height: 14px; */
  /* identical to box height */

  text-align: center;

  color: ${colors.white};
`;

export const Icon = styled(StyledIcon).attrs(({ color }) => ({
  size: 24,
  color: color || colors.white,
}))`
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;
export const ButtonContent = styled.View`
  /* flex: 1; */
  border: 1px solid ${colors.border};
  border-radius: 4px;
  elevation: 1;
  background-color: ${colors.primary};
`;
