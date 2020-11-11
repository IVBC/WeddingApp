import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';
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
import colors from '~/styles/colors';
import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

const actions = [
  {
    text: 'Todos os convidados',
    icon: <Icon name="account-group" size={24} color={colors.primary} />,
    name: 'bt_guestsList',
    position: 1,
    color: colors.white,
    textColor: colors.primary,
    // textBackground: 'transparent',
    textElevation: 15,
  },
  {
    text: 'Sair',
    icon: <Icon name="exit-to-app" color={colors.red} size={24} />,
    name: 'bt_signout',
    color: colors.white,
    textColor: colors.primary,
    position: 2,
    textElevation: 15,
  },
];

const Control = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const [statistic, setStatistic] = useState({});
  const [loading, setLoading] = useState(false);

  const loadStatistic = useCallback(() => {
    setLoading(true);
    const loadData = async () => {
      api.get('/receptionist/statistic').then(
        (response) => {
          setStatistic(response.data);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
    };

    loadData();
  }, []);

  useEffect(() => {
    loadStatistic();
  }, [loadStatistic]);

  const handleLogOut = useCallback(() => {
    Alert.alert(
      'Atenção',
      'Deseja realmente sair?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => dispatch(signOut()) },
      ],
      { cancelable: false }
    );
  }, [dispatch]);

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <HeaderDetail>
            <IconHeader name="clipboard-check-outline" />
            <HeaderTitle>CONTROLE DE CONVIDADOS</HeaderTitle>
          </HeaderDetail>
          <ButtonContainer>
            <RefreshButton onPress={loadStatistic}>
              <RefreshIcon />
            </RefreshButton>
          </ButtonContainer>
        </HeaderContainer>

        <Statistics data={statistic} loading={loading} />
        <TableList data={statistic?.statisticTables ?? []} loading={loading} />
      </Container>
      <FloatingAction
        showBackground={false}
        actions={actions}
        color={colors.primary}
        onPressItem={(name) => {
          if (name === 'bt_guestsList') {
            navigate('AllGuests');
          }
          if (name === 'bt_signout') {
            handleLogOut();
          }
        }}
        buttonSize={52}
      />
    </Background>
  );
};

export default Control;
