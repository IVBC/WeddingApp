import React, { memo, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Progress from '~/components/ProgressSteps';

import {
  Container,
  Content,
  TitleContainer,
  TitleIcon,
  TitleText,
  Footer,
  FooterContent,
  FooterContentData,
  FooterLabel,
  FooterInfo,
  FooterButton,
  FooterButtonTitle,
} from './styles';

const ListItem = ({ guest }) => {
  const { navigate } = useNavigation();

  const navigateToDetail = useCallback(() => navigate('Guests', { guest }), [
    navigate,
    guest,
  ]);

  // const formattedDate = useMemo(() => {
  //   return format(parseISO(guest.created_at), 'MM/dd/yyyy');
  // }, [guest.created_at]);

  return (
    <Container>
      <Content>
        <TitleContainer>
          <TitleIcon />
          <TitleText>
            Entrega {guest.id < 10 ? `0${guest.id}` : guest.id}
          </TitleText>
        </TitleContainer>
        {/* <Progress status={guest.status} /> */}
      </Content>
      <Footer>
        <FooterContentData>
          <FooterLabel>Data</FooterLabel>
          <FooterInfo>kkkkkkkk</FooterInfo>
        </FooterContentData>
        <FooterContent>
          <FooterLabel>Cidade</FooterLabel>
          <FooterInfo>lllllllllllll</FooterInfo>
        </FooterContent>
        <FooterButton onPress={navigateToDetail}>
          <FooterContent>
            <FooterButtonTitle>Ver detalhes</FooterButtonTitle>
          </FooterContent>
        </FooterButton>
      </Footer>
    </Container>
  );
};

ListItem.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(ListItem);
