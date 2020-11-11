import React, { useCallback, useState, memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Shimmer from '~/components/Shimmer';
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
import colors from '~/styles/colors';

function GuestsList({ guests: _guests, isSearching, updateGuests, loading }) {
  const [guests, setGuests] = useState(_guests);

  // useEffect(() => {
  //   setGuests(_guests);
  // }, [_guests]);

  useMemo(() => {
    setGuests(_guests);
  }, [_guests]);
  const renderEmpty = useCallback(() => {
    if (loading) return null;
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
  }, [isSearching, loading]);

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

  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return (
      <Shimmer
        visible={!loading}
        shimmerColors={['#F2F5FF', '#CED4ED', '#F2F5FF']}
        style={{ width: '100%', height: 8, borderRadius: 25, marginTop: 8 }}
      >
        <Text>Loading</Text>
      </Shimmer>
    );
  }, [loading]);

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
          renderItem={({ item: guest }) => {
            if (loading) return null;
            return <ListItem guest={guest} toogleConfirmGuest={confirmGuest} />;
          }}
          ListFooterComponent={renderFooter}
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
