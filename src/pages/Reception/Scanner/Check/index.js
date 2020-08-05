import React, { useState } from 'react';

import ListItem from './ListItem';

import PressButton from '~/components/PressButton';

import {
  Container,
  Header,
  ContainerText,
  TextTitle,
  PasswordContainer,
  PasswordLabel,
  PasswordValue,
  TableContainer,
  TableIndicator,
  TableName,
  NumberTable,
  List,
  // Button,
  // TextButton,
  Icon,
  ButtonText,
  ButtonContent,
} from './styles';

const Check = () => {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: 'Andreia Pardo Lessa',
      isConfirmed: true,
    },
    {
      id: 2,
      name: 'Flávio Lessa Pardo',
      isConfirmed: false,
    },
    {
      id: 3,
      name: 'Wendrio Pardo Silva',
      isConfirmed: false,
    },
    {
      id: 4,
      name: 'Flávia Hernanes Ferreira',
      isConfirmed: false,
    },
    {
      id: 5,
      name: 'Andrei Pardo Lessa',
      isConfirmed: false,
    },
  ]);

  const confirmGuest = (id) => {
    const idxGuest = guests.findIndex((g) => g.id === id);
    const updatedGuests = [...guests];
    updatedGuests[idxGuest] = {
      ...updatedGuests[idxGuest],
      isConfirmed: !updatedGuests[idxGuest].isConfirmed,
    };
    setGuests(updatedGuests);
    // updateGuests(updatedGuests);
  };
  return (
    <Container>
      <Header>
        <ContainerText>
          <TextTitle>Lista de Convidados</TextTitle>
          <PasswordContainer>
            <PasswordLabel>Senha:</PasswordLabel>
            <PasswordValue>gx34a</PasswordValue>
          </PasswordContainer>
        </ContainerText>

        <TableContainer>
          <TableIndicator>
            <TableName>MESA</TableName>
            <NumberTable>05</NumberTable>
          </TableIndicator>
        </TableContainer>
      </Header>
      <List
        data={guests}
        keyExtractor={(guest) => String(guest.id)}
        // onEndReached={loadGuests}
        // ListFooterComponent={moreLoading}
        // ListEmptyComponent={renderEmpty}
        renderItem={({ item: guest }) => (
          <ListItem guest={guest} toogleConfirmGuest={confirmGuest} />
        )}
      />
      {/* <Button>
        <TextButton>Confirmar</TextButton>
      </Button> */}
      <ButtonContent>
        <PressButton
          onLongPress={() => {
            console.log('foii');
          }}
        >
          <Icon name="page-next-outline" />
          <ButtonText>Confirmar</ButtonText>
        </PressButton>
      </ButtonContent>
    </Container>
  );
};

export default Check;
