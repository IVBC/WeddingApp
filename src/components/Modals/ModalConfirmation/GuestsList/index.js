import React, { useCallback, useState, memo } from 'react';
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

function GuestsList({ guests: _guests, updateGuests }) {
  const [guests, setGuests] = useState(_guests);

  const renderEmpty = useCallback(() => {
    const contentEmptyListMessage = {
      iconName: 'account-group-outline',
      message: 'Não há convidados ainda',
    };

    return (
      <EmptyListMessage
        iconName={contentEmptyListMessage.iconName}
        message={contentEmptyListMessage.message}
      />
    );
  }, []);

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

export default memo(GuestsList);

GuestsList.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool,
    })
  ).isRequired,
  updateGuests: PropTypes.func.isRequired,
};
