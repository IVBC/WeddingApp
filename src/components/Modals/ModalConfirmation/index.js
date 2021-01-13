import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
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
import api from '~/services/api';
import Loading from '~/components/Loading';
import colors from '~/styles/colors';
import { updateProfileRequest } from '~/store/modules/user/actions';

function ModalConfirmation({ isOpen, close, guests: _guests, confirmGuests }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [guests, setGuests] = useState(_guests);

  useEffect(() => {
    setGuests(_guests);
  }, [isOpen, _guests]);

  const updateGuests = (gts) => {
    setGuests(gts);
  };

  const handleConfirmGuests = () => {
    setLoading(true);
    api
      .put('guests/confirmation', guests)
      .then(() => {
        setLoading(false);

        confirmGuests(guests);
        dispatch(updateProfileRequest());
        close();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <Modal isVisible={isOpen}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <StatusBar backgroundColor="rgba(0,0,0,0.7)" />
        <ContainerModal>
          <Header>
            <TitleHeader>Confirmação de convidados</TitleHeader>

            <ButtonContainer>
              <CloseButton onPress={() => close()}>
                <CloseIcon />
              </CloseButton>
            </ButtonContainer>
          </Header>
          <GuestsList guests={guests} updateGuests={updateGuests} />

          <ButtonConfirmContainer>
            <ButtonConfirm
              disabled={loading}
              onPress={() => handleConfirmGuests()}
            >
              {loading ? (
                <Loading background={colors.secondary} />
              ) : (
                <ButtonText>Confirmar</ButtonText>
              )}
            </ButtonConfirm>
          </ButtonConfirmContainer>
        </ContainerModal>
      </View>
    </Modal>
  );
}

export default ModalConfirmation;

ModalConfirmation.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  confirmGuests: PropTypes.func.isRequired,
};
