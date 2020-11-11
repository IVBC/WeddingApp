import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '~/styles/colors';

export const Container = styled.View`
  margin: 4px 0px;
  /* height: 200px; */

  /* border: 1px solid ${colors.border}; */

  background-color: ${colors.bg};



  /* flex: 1; */

  /* margin-bottom: 28px; */
  /* padding: 1px; */
`;

export const Content = styled.View`
  /* background-color: ${colors.bg}; */
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
`;

export const Guest = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const TitleIcon = styled(Icon).attrs((props) => ({
  name: props.isChild ? 'account-child' : 'account',
  color: colors.primary,
  size: 24,
}))``;

export const CheckIcon = styled(Icon).attrs(() => ({
  size: 24,
}))``;

export const TitleText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  flex: 1;

  color: ${colors.primary};
  margin-left: 10px;
`;

// export const Footer = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const FooterContent = styled.View`
//   flex: 1;
//   flex-direction: column;
//   padding: 20px;
// `;

// export const FooterLabel = styled.Text`
//   font-family: 'Roboto-Regular';
//   font-weight: bold;
//   font-size: 8px;
//   color: ${colors.fontLight};
// `;

// export const FooterInfo = styled.Text`
//   font-family: 'Roboto-Regular';
//   font-size: 12px;
//   font-weight: bold;
//   color: ${colors.fontDark};
// `;

// export const FooterContentData = styled.View`
//   flex: 1;
//   flex-direction: column;
//   padding: 20px;
// `;

// export const FooterButton = styled(BorderlessButton)`
//   padding-top: 8px;
// `;

// export const FooterButtonTitle = styled.Text`
//   font-family: 'Roboto-Regular';
//   font-size: 14px;
//   font-weight: bold;
//   color: ${colors.primary};
// `;
