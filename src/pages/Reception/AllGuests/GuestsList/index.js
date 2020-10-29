import React, { useCallback, useState, memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import EmptyListMessage from '~/components/ListEmptyMessage';

import {
  List,
  Container,
  Content,
  TitleContainer,
  Icon,
  TitleText,
} from './styles';
import Legend from '~/components/Legend';

function GuestsList({ guests: _guests, isSearching, updateGuests }) {
  const [guests, setGuests] = useState(_guests);

  // useEffect(() => {
  //   setGuests(_guests);
  // }, [_guests]);

  useMemo(() => {
    setGuests(_guests);
  }, [_guests]);
  const renderEmpty = useCallback(() => {
    let contentEmptyListMessage = {
      iconName: 'account-group-outline',
      message: 'Não há convidados ainda',
    };

    if (isSearching) {
      contentEmptyListMessage = {
        iconName: 'account-remove',
        message: 'Sentimos Muito! \n Não o encontramos :(',
        // message: 'Nome não encontrado!',
      };
    }

    return (
      <EmptyListMessage
        iconName={contentEmptyListMessage.iconName}
        message={contentEmptyListMessage.message}
      />
    );
  }, [isSearching]);

  const confirmGuest = (id) => {
    const idxGuest = guests.findIndex((g) => g.id === id);
    const updatedGuests = [...guests];
    updatedGuests[idxGuest] = {
      ...updatedGuests[idxGuest],
      isConfirmed: !updatedGuests[idxGuest].isConfirmed,
    };
    setGuests(updatedGuests);
    updateGuests(updatedGuests);
  };

  return (
    <>
      <Container>
        <Content>
          <TitleContainer>
            <Icon name="group" />
            <TitleText>LISTA DE CONVIDADOS</TitleText>
          </TitleContainer>
        </Content>
        <List
          data={guests}
          keyExtractor={(guest) => String(guest.id)}
          ListEmptyComponent={renderEmpty}
          renderItem={({ item: guest }) => (
            <ListItem guest={guest} toogleConfirmGuest={confirmGuest} />
          )}
        />
        <Legend disabledIsPresent />
      </Container>
    </>
  );
}

export default GuestsList;

GuestsList.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool,
      isSearching: PropTypes.bool,
    })
  ).isRequired,
  updateGuests: PropTypes.func.isRequired,
};
