import React, { useCallback } from 'react';
import { Linking, Alert } from 'react-native';

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
  const handlePress = useCallback(async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return (
    <Background>
      <TitleHeader>
        <Title>Sugestão de presente</Title>
      </TitleHeader>
      <Body>
        <SubTitle>Nossa lista de presentes está disponível nas lojas:</SubTitle>
        <Button
          onPress={() =>
            handlePress('http://listadepresente.de/denisepardoeisaquevilson')
          }
        >
          <BackgroundButton>
            <LogoBemol />
          </BackgroundButton>
        </Button>
        <Button
          onPress={() =>
            handlePress('https://lista.camicado.com.br/deniseeisaquee')
          }
        >
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
