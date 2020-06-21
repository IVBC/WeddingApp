import React from 'react';
import { View } from 'react-native';

import Background from '~/components/Background';
import {
  Body,
  TitleHeader,
  Title,
  SubTitle,
  Button,
  BackgroundButton,
  LogoBemol,
  LogoCamicado,
  BankDepositContainer,
  HeaderBankDeposit,
  TitleBankDeposit,
  BodyBankDeposit,
  IconCard,
  Col1,
  Col2,
  DetailText,
} from './styles';

const GiftSuggestion = () => {
  return (
    <Background>
      <TitleHeader>
        <Title>Sugestão de presente</Title>
      </TitleHeader>
      <Body>
        <SubTitle>Nossa lista de presentes está disponível nas lojas:</SubTitle>
        <Button>
          <BackgroundButton>
            <LogoBemol />
          </BackgroundButton>
        </Button>
        <Button>
          <BackgroundButton>
            <LogoCamicado />
          </BackgroundButton>
        </Button>

        <BankDepositContainer>
          <HeaderBankDeposit>
            <TitleBankDeposit>Depósito bancário</TitleBankDeposit>
          </HeaderBankDeposit>
          <BodyBankDeposit>
            <IconCard name="credit-card" />
            <Col1>
              <DetailText>Banco Inter Digital</DetailText>
              <DetailText>Banco: 003</DetailText>
            </Col1>
            <Col2>
              <DetailText>Ag: 2245</DetailText>
              <DetailText>CC: 3433 - 3</DetailText>
            </Col2>
          </BodyBankDeposit>
        </BankDepositContainer>
      </Body>
    </Background>
  );
};

export default GiftSuggestion;
