import React, { useState } from 'react';
import { View, Platform, Linking, ActivityIndicator } from 'react-native';

import Background from '~/components/Background';

import {
  MenuContainer,
  Wrapper,
  MenuIcon,
  HeaderBackground,
  Header,
  TitleHeader,
  DateIndicator,
  Month,
  Day,
  Year,
  Body,
  RowContent,
  IconItem,
  Details,
  Description,
  NavigateButton,
  ButtonTitle,
  ButtonIcon,
} from './styles';

const Location = () => {
  const [loading, setLoading] = useState(false);
  const openGps = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL(
        // 'http://maps.apple.com/?daddr=-3.119069,-60.0157302'
        'https://maps.apple.com/?address=Avenida%20Barcelos,%201046,%20Pra%C3%A7a%2014%20de%20Janeiro,%20Manaus%20-%20AM,%2069025-280,%20Brazil&auid=11889151050871057732&ll=-3.118899,-60.015810&lsp=9902&q=Felicit%C3%A1%20Eventos&_ext=ChkKBAgEEBkKBAgFEAMKBQgGEN8BCgQIChAAEiYpLn7FCs/8CMAx1OvavZoCTsA5UCZoSGnqCMBB9D/r8XMBTsBQBA%3D%3D&t=m'
      );
    } else {
      Linking.openURL(
        'https://www.google.com/maps/place/Felicit%C3%A1+Eventos/@-3.11909,-60.0179497,17z/data=!3m1!4b1!4m5!3m4!1s0x926c054259a4e5d3:0x2227852c92cabb20!8m2!3d-3.11909!4d-60.015761'
      );
    }
  };

  return (
    <Background>
      <Wrapper>
        <MenuContainer
          // start={{ x: 0.0, y: 0.25 }}
          // end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.7, 1]}
          colors={[
            '#F2F5FF',
            'rgba(255, 255, 255, 1)',
            'rgba(242, 245, 255, 0.0001)',
          ]}
        >
          <HeaderBackground>
            <Header>
              <TitleHeader>Felicitá Eventos</TitleHeader>
              <DateIndicator>
                <Month>FEV</Month>
                <Day>13</Day>
                <Year>2021</Year>
              </DateIndicator>
            </Header>
          </HeaderBackground>
          <Body>
            <RowContent>
              <IconItem name="timer" />
              <Details>
                <Description>Às 19 Hrs </Description>
              </Details>
            </RowContent>
            <RowContent>
              <IconItem name="pin-drop" />
              <Details>
                <Description>Avenida Barcelos </Description>
                <Description>Nº 648</Description>
                <Description>Praça 14 de Janeiro</Description>
                <Description>Manaus, Amazonas</Description>
                <Description>Brasil, 69042-044</Description>
              </Details>
            </RowContent>
          </Body>
          <NavigateButton
            disabled={loading}
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
              openGps();
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#ffffff" />
            ) : (
              <>
                <ButtonIcon name="near-me" />
                <ButtonTitle>Navegar</ButtonTitle>
              </>
            )}
          </NavigateButton>
        </MenuContainer>
        <MenuIcon name="attach-file" />
      </Wrapper>
    </Background>
  );
};

export default Location;
