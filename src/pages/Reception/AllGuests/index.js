import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect, memo } from 'react';
import { Alert } from 'react-native';
import Background from '~/components/Background';
import api from '~/services/api';
import GuestsList from './GuestsList';

import {
  Container,
  Icon,
  HeaderContainer,
  ButtonContainer,
  GoBackButton,
  HeaderDetail,
  IconHeader,
  HeaderTitle,
  ContainerInput,
  SearchIcon,
  SearchInput,
} from './styles';

const AllGuests = () => {
  const [guests, setGuests] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const updateGuests = (gts) => {
    setGuests(gts);
  };

  const loadGuests = useCallback(() => {
    setLoading(true);

    api
      .get('guests', {
        params: {
          q: searchValue,
        },
      })
      .then((response) => {
        setLoading(false);
        setGuests(response.data.guests);

        // console.log(response.data.guests);
      })
      .catch(() => {
        setLoading(false);
        Alert.alert(
          'Não foi possível buscar os convidados. Tente novamente...',
          'Falha na comunicação com o Servidor'
        );
      });
  }, [searchValue]);

  useEffect(() => {
    loadGuests();
  }, []);
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
            <HeaderTitle>Procurar</HeaderTitle>
            <IconHeader name="account-search" />
          </HeaderDetail>
        </HeaderContainer>
        <ContainerInput>
          <SearchIcon />
          <SearchInput placeholder="Digite o nome" />
        </ContainerInput>

        <GuestsList guests={guests} updateGuests={updateGuests} />
      </Container>
    </Background>
  );
};

export default memo(AllGuests);
