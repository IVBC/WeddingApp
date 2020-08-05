import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native';

import ListItem from './ListItem';

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
} from './styles';
import Background from '~/components/Background';
import Statistics from '~/components/Statistics';

const DetailControl = () => {
  const navigation = useNavigation();
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
            <HeaderTitle>MESA 01</HeaderTitle>
          </HeaderDetail>
        </HeaderContainer>
        <Statistics />
        <List
          data={guests}
          keyExtractor={(guest) => String(guest.id)}
          // onEndReached={loadGuests}
          // ListFooterComponent={moreLoading}
          // ListEmptyComponent={renderEmpty}
          renderItem={({ item: guest }) => <ListItem guest={guest} />}
        />
      </Container>
    </Background>
  );
};

export default DetailControl;
