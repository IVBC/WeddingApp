import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
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
  Button,
  TextButton,
  Icon,
  ButtonText,
  ButtonContent,
} from './styles';
import Legend from '~/components/Legend';
import api from '~/services/api';

const Check = ({ family, reactivateScanner }) => {
  const [guests, setGuests] = useState(family?.guests);
  const [loading, setLoading] = useState(false);

  const confirmGuest = useCallback(
    (id) => {
      const idxGuest = guests.findIndex((g) => g.id === id);
      const updatedGuests = [...guests];
      updatedGuests[idxGuest] = {
        ...updatedGuests[idxGuest],
        isPresent: !updatedGuests[idxGuest].isPresent,
      };
      setGuests(updatedGuests);
    },
    [guests]
  );

  const handleSubmit = useCallback(() => {
    setLoading(true);

    api
      .put('guests/present', guests)
      .then(() => {
        setLoading(false);
        // setGuests(response.data);
        reactivateScanner();
      })
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Não foi possível efetuar a confirmação no evento',
          'Falha na comunicação com o Servidor'
        );
      });
  }, [guests, reactivateScanner]);

  return (
    <Container>
      <Header>
        <ContainerText>
          <TextTitle>Lista de Convidados</TextTitle>
          <PasswordContainer>
            <PasswordLabel>Senha:</PasswordLabel>
            <PasswordValue>{family.code}</PasswordValue>
          </PasswordContainer>
        </ContainerText>

        <TableContainer>
          <TableIndicator>
            <TableName>MESA</TableName>
            <NumberTable>
              {family.numberTable < 10
                ? `0${family.numberTable}`
                : family.numberTable}
            </NumberTable>
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
          <ListItem
            guest={guest}
            toogleConfirmGuest={(id) => confirmGuest(id)}
          />
        )}
      />
      {/* <Button onPress={() => handleSubmit()}>
        <TextButton>Confirmar</TextButton>
      </Button> */}
      <Legend />
      <ButtonContent>
        <PressButton onLongPress={() => handleSubmit()}>
          <Icon name="page-next-outline" />
          <ButtonText>Confirmar</ButtonText>
        </PressButton>
      </ButtonContent>
    </Container>
  );
};

export default Check;

Check.propTypes = {
  family: PropTypes.shape({
    code: PropTypes.string,
    welcomeSubject: PropTypes.string,
    numberTable: PropTypes.number,
    guests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isConfirmed: PropTypes.bool,
        isPresent: PropTypes.bool,
        isChild: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
  reactivateScanner: PropTypes.func.isRequired,
};
