import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const WelcomeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px;
`;
export const WelcomeTextContainer = styled.View``;

export const TitleWelcome = styled.Text`
  color: #6c89b2;
  font-family: 'Roboto';
  font-size: 32px;
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
