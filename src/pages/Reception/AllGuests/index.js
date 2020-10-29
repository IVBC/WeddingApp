import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect, memo, useRef } from 'react';
import { Alert } from 'react-native';
import { debounce } from 'lodash';

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
  const searchRef = useRef(null);
  const [guests, setGuests] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const count = 0;
  const handleSearch = useCallback(() => {
    setSearchValue(searchRef.current._lastNativeText);
  }, []);

  const handler = useCallback(debounce(handleSearch, 500), []);

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
    console.log('carregando dados');
    loadGuests();
  }, [searchValue]);
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
          <SearchInput
            ref={searchRef}
            placeholder="Digite o nome"
            onChangeText={handler}
          />
        </ContainerInput>

        <GuestsList
          guests={guests}
          isSearching={!!searchValue}
          updateGuests={updateGuests}
        />
      </Container>
    </Background>
  );
};

export default memo(AllGuests);
