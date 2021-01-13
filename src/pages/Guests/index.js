import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';

import {
  WelcomeContainer,
  WelcomeTextContainer,
  TitleWelcome,
  SubTitleWelcome,
  TableIndicator,
  TableName,
  NumberTable,
  IconFloatingButton,
} from './styles';

import colors from '~/styles/colors';
import Background from '~/components/Background';
import GuestsList from './GuestsList';
import ModalQrCode from '~/components/Modals/ModalQrCode';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

const actions = [
  {
    text: 'QR CODE',
    icon: <IconFloatingButton name="qrcode" />,
    name: 'bt_qrcode',
    position: 1,
    color: colors.white,
    textColor: colors.primary,
    // textBackground: 'transparent',
    textElevation: 15,
  },
  {
    text: 'Sair',
    icon: (
      <IconFloatingButton name="logout" color={colors.red} marginLeft={4} />
    ),
    name: 'bt_signout',
    color: colors.white,
    textColor: colors.primary,
    position: 2,
    textElevation: 15,
  },
];
const Guests = () => {
  const dispatch = useDispatch();

  const [isModalVisibleQrCode, setModalVisibleQrCode] = useState(false);
  const openQrCode = () => setModalVisibleQrCode((prev) => !prev);

  const family = useSelector((state) => state.user.profile);

  useEffect(()=> {
    dispatch(updateProfileRequest());
  }, []);


  console.log(family.guests)

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
      <ModalQrCode
        isOpen={isModalVisibleQrCode}
        close={() => setModalVisibleQrCode(false)}
      />
      <WelcomeContainer>
        <WelcomeTextContainer>
          <TitleWelcome>Olá, {family?.welcomeSubject}!</TitleWelcome>
          <SubTitleWelcome>
            Ficaremos felizes com a presença de todos vocês !
          </SubTitleWelcome>
        </WelcomeTextContainer>
        <TableIndicator>
          <TableName>MESA</TableName>
          <NumberTable>
            {family?.numberTable < 10
              ? `0${family?.numberTable}`
              : family?.numberTable}
          </NumberTable>
        </TableIndicator>
      </WelcomeContainer>
      {/* <Card>
        <Description>
          Cada convidado pagante tem direito a uma senha individual que será
          validada com a apresentação do QR Code na recepção do evento, a
          apresentação do QR code pode ser feita por qualquer um dos convidados
          listados nesse convite.
        </Description>
      </Card> */}

      <GuestsList data={family?.guests} />

      <FloatingAction
        showBackground={false}
        actions={actions}
        color={colors.primary}
        onPressItem={(name) => {
          if (name === 'bt_qrcode') {
            openQrCode();
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

export default Guests;
