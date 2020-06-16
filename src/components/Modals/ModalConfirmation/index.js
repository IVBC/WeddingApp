import React from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import GuestsList from './GuestsList';

import {
  ContainerModal,
  Header,
  TitleHeader,
  CloseButton,
  CloseIcon,
  ContainerList,
  ButtonContainer,
  ConfirmButton,
} from './styles';

function ModalConfirmation({ isOpen, close }) {
  console.log(isOpen);
  console.log(close);
  return (
    <Modal isVisible={isOpen}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ContainerModal>
          <Header>
            <TitleHeader>Selecione os convidados confirmados</TitleHeader>

            <ButtonContainer>
              <CloseButton onPress={() => close()}>
                <CloseIcon />
              </CloseButton>
            </ButtonContainer>
          </Header>
          <GuestsList />
          <ConfirmButton />
        </ContainerModal>
      </View>
    </Modal>
  );
}

export default ModalConfirmation;
