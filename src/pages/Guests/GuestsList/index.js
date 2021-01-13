import React, { useCallback, useState, useMemo, memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import ListItem from './ListItem';
import Loading from '~/components/Loading';
import EmptyListMessage from '~/components/ListEmptyMessage';
import ModalConfirmation from '~/components/Modals/ModalConfirmation';

import {
  List,
  Container,
  Content,
  TitleContainer,
  Icon,
  TitleText,
  Button,
  ButtonText,
  ButtonContainer,
} from './styles';
import Legend from '~/components/Legend';

function GuestsList({ data }) {
  const [guests, setGuests] = useState(data);
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGuests(data);
  }, [data]);

  const [isModalVisibleConfirmation, setModalVisibleConfirmation] = useState(
    false
  );

  const toggleModalConfirmation = () => {
    setModalVisibleConfirmation(!isModalVisibleConfirmation);
  };

  // useEffect(() => {
  //   if (isFocused) {
  //     setGuests([]);
  //     setPage(1);
  //     setTotal(0);
  //   }
  // }, [isFocused]);

  // useEffect(() => {
  //   if (page === 1) {
  //     loadGuests();
  //   }
  // }, [page]);

  const moreLoading = useMemo(() => {
    if (loading) {
      return <Loading />;
    }
    return null;
  }, [loading]);

  const renderEmpty = useCallback(() => {
    if (!loading) {
      const contentEmptyListMessage = {
        iconName: 'account-multiple',
        message: 'Não há convidados para esta familia.',
      };

      return (
        <EmptyListMessage
          iconName={contentEmptyListMessage.iconName}
          message={contentEmptyListMessage.message}
        />
      );
    }
    return null;
  }, [loading]);

  const confirmedGuests = (_guests) => {
    setGuests(_guests);
  };

  return (
    <>
      <Container>
        <ModalConfirmation
          isOpen={isModalVisibleConfirmation}
          close={toggleModalConfirmation}
          guests={guests}
          confirmGuests={confirmedGuests}
        />
        <Content>
          <TitleContainer>
            <Icon name="group" />
            <TitleText>LISTA DE CONVIDADOS</TitleText>
          </TitleContainer>
          <ButtonContainer>
            <Button onPress={() => toggleModalConfirmation()}>
              <ButtonText>Confirmação</ButtonText>
              <Icon name="chevron-right" />
            </Button>
          </ButtonContainer>
        </Content>
        <List
          data={guests}
          keyExtractor={(guest) => String(guest.id)}
          // onEndReached={loadGuests}
          ListFooterComponent={moreLoading}
          ListEmptyComponent={renderEmpty}
          renderItem={({ item: guest }) => <ListItem guest={guest} />}
        />
        <Legend disabledIsPresent />
      </Container>
    </>
  );
}

export default memo(GuestsList);
