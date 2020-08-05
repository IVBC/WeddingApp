import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '~/styles/colors';

export const WelcomeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 12px;
  margin-top: 0px;
  padding: 8px 8px;
  border-color: ${colors.border};
  border-top-width: 2px;
  border-bottom-width: 2px;
`;
export const WelcomeTextContainer = styled.View`
  flex: 1;
`;

export const TitleWelcome = styled.Text`
  color: #6c89b2;
  font-family: 'Roboto';
  font-size: 24px;
  line-height: 33px;
`;

export const SubTitleWelcome = styled.Text`
  color: #6c89b2;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 18px;
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
  color: #6c89b2;
  font-size: 12px;
`;
export const NumberTable = styled.Text`
  color: #6c89b2;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
`;

export const Card = styled.View`
  margin: 0 32px;
  padding: 8px;
  background: rgba(255, 252, 252, 0.5);
  border-radius: 8px;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: justify;

  color: #002966;
`;

export const FloatingButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.primary};

  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px rgba(3, 3, 3, 0.25);
  position: absolute;
  right: 24px;
  bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const IconFloatingButton = styled(Icon).attrs((props) => ({
  size: 48,
  color: colors.primary,
}))`
  margin-top: 5px;
`;
