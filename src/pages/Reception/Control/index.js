import React, { useState } from 'react';
import { View, Text } from 'react-native';

import TableList from './TableList';

import {
  Container,
  HeaderContainer,
  HeaderDetail,
  IconHeader,
  HeaderTitle,
  ButtonContainer,
  RefreshButton,
  RefreshIcon,
} from './styles';
import Background from '~/components/Background';
import Statistics from '~/components/Statistics';

const Control = () => {
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <HeaderDetail>
            <IconHeader name="clipboard-check-outline" />
            <HeaderTitle>CONTROLE DE CONVIDADOS</HeaderTitle>
          </HeaderDetail>
          <ButtonContainer>
            <RefreshButton onPress={() => {}}>
              <RefreshIcon />
            </RefreshButton>
          </ButtonContainer>
        </HeaderContainer>
        <Statistics />
        <TableList />
      </Container>
    </Background>
  );
};

export default Control;
