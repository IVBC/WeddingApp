import React from 'react';
import { View, Text } from 'react-native';

import {
  WelcomeContainer,
  WelcomeTextContainer,
  TitleWelcome,
  SubTitleWelcome,
  TableIndicator,
  TableName,
  NumberTable,
  Card,
  Description,
} from './styles';
import Background from '~/components/Background';
import GuestsList from './GuestsList';

const Guests = () => {
  return (
    <Background>
      <WelcomeContainer>
        <WelcomeTextContainer>
          <TitleWelcome>Olá, familia Pardo!</TitleWelcome>
          <SubTitleWelcome>
            Ficaremos felizes com a presença de todos vocês !
          </SubTitleWelcome>
        </WelcomeTextContainer>
        <TableIndicator>
          <TableName>MESA</TableName>
          <NumberTable>05</NumberTable>
        </TableIndicator>
      </WelcomeContainer>
      <Card>
        <Description>
          Cada convidado pagante tem direito a uma senha individual que será
          validada com a apresentação do QR Code na recepção do evento, a
          apresentação do QR code pode ser feita por qualquer um dos convidados
          listados nesse convite.
        </Description>
      </Card>

      <GuestsList />
    </Background>
  );
};

export default Guests;
