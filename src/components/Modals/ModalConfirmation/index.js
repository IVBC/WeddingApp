import React, { useState } from 'react';
import {
  Button,
  Text,
  StatusBar,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import GuestsList from './GuestsList';

import {
  ContainerModal,
  Header,
  TitleHeader,
  CloseButton,
  CloseIcon,
  ButtonContainer,
  ButtonConfirm,
  ButtonText,
  ButtonConfirmContainer,
} from './styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT'
      );

function ModalConfirmation({ isOpen, close, guests: _guests, confirmGuests }) {
  const [guests, setGuests] = useState(_guests);

  const updateGuests = (gts) => {
    setGuests(gts);
  };

  const handleConfirmGuests = () => {
    // solicitacao da api aqui com o loading
    console.log('confimaandoo');
    confirmGuests(guests);
    close();
  };
  return (
    <Modal
      isVisible={isOpen}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <StatusBar backgroundColor="rgba(0,0,0,0.7)" />
        <ContainerModal>
          <Header>
            <TitleHeader>Selecione os convidados confirmados</TitleHeader>

            <ButtonContainer>
              <CloseButton onPress={() => close()}>
                <CloseIcon />
              </CloseButton>
            </ButtonContainer>
          </Header>
          <GuestsList guests={guests} updateGuests={updateGuests} />

          <ButtonConfirmContainer>
            <ButtonConfirm onPress={() => handleConfirmGuests()}>
              <ButtonText>Confirmar</ButtonText>
              {/* <Icon name="check" /> */}
            </ButtonConfirm>
          </ButtonConfirmContainer>
        </ContainerModal>
      </View>
    </Modal>
  );
}

export default ModalConfirmation;
