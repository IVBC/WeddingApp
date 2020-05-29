import React, { useEffect, useCallback, useState, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { Alert } from 'react-native';
import api from '~/services/api';

import ListItem from './ListItem';
import Loading from '~/components/Loading';
import EmptyListMessage from '~/components/ListEmptyMessage';

import colors from '~/styles/colors';

import { signOut } from '~/store/modules/auth/actions';

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

function ListDelivery() {
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [guests, setGuests] = useState([
    {
      id: 1,
      name: 'Andreia Pardo Lessa',
      isConfirmed: false,
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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Selection for guest type
  const [typeDelivered, setTypeDelivered] = useState(false);

  const loadGuests = async () => {
    if (loading) {
      return;
    }

    if (total > 0 && guests.length === total) {
      return;
    }

    setLoading(true);

    try {
      const response = await api.get(`/deliverer/${id}/guests`, {
        params: { page, filter: typeDelivered ? 'DELIVERED' : 'OPEN' },
      });

      const {
        data: { guests: _guests, count },
      } = response;

      setGuests((prevGuests) => [...prevGuests, ..._guests]);

      setTotal(count);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      if (err.response) {
        const codeErro = err.response.status;
        if (codeErro === 401) {
          Alert.alert('Sentimos muito :(', 'Vocế está demitido.');
          dispatch(signOut());
        } else {
          Alert.alert(
            'Não foi possível carregar suas entregas !',
            'Entregador não encontrado'
          );
        }
      } else {
        Alert.alert(
          'Não foi possível carregar suas entregas !',
          'Falha na comuniçao com o servidor. Por favor, tente novamente...'
        );
      }
    } finally {
      setLoading(false);
    }
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
      let contentEmptyListMessage;

      if (true) {
        contentEmptyListMessage = {
          iconName: 'truck-check',
          message: 'Não há registros de entregas.',
        };
      } else {
        contentEmptyListMessage = {
          iconName: 'truck-delivery',
          message: 'Não há entregas pendentes.',
        };
      }

      return (
        <EmptyListMessage
          iconName={contentEmptyListMessage.iconName}
          message={contentEmptyListMessage.message}
        />
      );
    }
    return null;
  }, [loading, typeDelivered]);

  return (
    <>
      <Container>
        <Content>
          <TitleContainer>
            <Icon name="group" />
            <TitleText>Lista de Convidados</TitleText>
          </TitleContainer>
          <ButtonContainer>
            <Button onPress={() => {}}>
              <ButtonText>Confirmação</ButtonText>
              <Icon name="expand-more" />
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
      </Container>
    </>
  );
}

export default memo(ListDelivery);
