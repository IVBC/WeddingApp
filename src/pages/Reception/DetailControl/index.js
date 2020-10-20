import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '~/services/api';

import ListItem from './ListItem';

import EmptyListMessage from '~/components/ListEmptyMessage';

import {
  Container,
  HeaderContainer,
  HeaderDetail,
  IconHeader,
  HeaderTitle,
  ButtonContainer,
  GoBackButton,
  Icon,
  List,
  FilterContainer,
  FilterOption,
} from './styles';
import Background from '~/components/Background';
import Statistics from '~/components/Statistics';
import FilterGuest from './FilterGuest';
import Legend from '~/components/Legend';

const DetailControl = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { numberTable } = route.params;

  const [statistic, setStatistic] = useState({});
  const [typePresent, setTypePresent] = useState(true);
  console.log(statistic);

  const loadStatistic = useCallback(() => {
    console.log('carregando dados de detalhes');
    const loadData = async () => {
      api.get(`/receptionist/statistic/${numberTable}`).then((response) => {
        setStatistic(response.data);
      });
    };

    loadData();
  }, [numberTable]);

  useEffect(() => {
    loadStatistic();
  }, [loadStatistic]);

  const filtedGuests = useMemo(() => {
    if (statistic.guests)
      return statistic.guests.filter((g) => g.isPresent === typePresent);
    return [];
  }, [typePresent, statistic.guests]);

  const renderEmpty = useCallback(() => {
    let contentEmptyListMessage = {
      iconName: 'account-clock',
      message: `Opa!\n A Mesa ${
        numberTable < 10 ? `0${numberTable}` : numberTable
      } ainda está vazia :( \nAguarde...`,
    };

    if (!typePresent) {
      contentEmptyListMessage = {
        iconName: 'account-check',
        message: `Opa!\n Todos os convidados da\nMesa ${
          numberTable < 10 ? `0${numberTable}` : numberTable
        } estão presentes :)`,
      };
    }

    return (
      <EmptyListMessage
        iconName={contentEmptyListMessage.iconName}
        message={contentEmptyListMessage.message}
      />
    );
  }, [numberTable, typePresent]);

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <ButtonContainer>
            <GoBackButton
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon />
            </GoBackButton>
          </ButtonContainer>
          <HeaderDetail>
            <IconHeader name="clipboard-check-outline" />
            <HeaderTitle>
              MESA {numberTable < 10 ? `0${numberTable}` : numberTable}
            </HeaderTitle>
          </HeaderDetail>
        </HeaderContainer>
        <Statistics data={statistic} />
        <FilterGuest
          typePresent={typePresent}
          setTypePresent={setTypePresent}
        />
        <List
          data={filtedGuests}
          keyExtractor={(guest) => String(guest.id)}
          // onEndReached={loadGuests}
          // ListFooterComponent={moreLoading}
          ListEmptyComponent={renderEmpty}
          renderItem={({ item: guest }) => <ListItem guest={guest} />}
        />
        <Legend />
      </Container>
    </Background>
  );
};

export default DetailControl;
