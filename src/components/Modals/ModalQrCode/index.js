import React from 'react';
import { StatusBar, View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import QRCode from 'react-native-qrcode-svg';

import { useSelector } from 'react-redux';

import {
  ContainerModal,
  Header,
  Message,
  CloseButton,
  CloseIcon,
  ButtonContainer,
} from './styles';

import colors from '~/styles/colors';

function ModalQrCode({ isOpen, close }) {
  const { code } = useSelector((state) => state.auth);

  return (
    <Modal
      isVisible={isOpen}
      // animationInTiming={2000}
      // animationOutTiming={2000}
      // backdropTransitionInTiming={10}
      // backdropTransitionOutTiming={10}
    >
      <StatusBar backgroundColor="rgba(0,0,0,0.7)" />

      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ContainerModal>
          <Header>
            <ButtonContainer>
              <CloseButton
                onPress={() => {
                  close();
                }}
              >
                <CloseIcon />
              </CloseButton>
            </ButtonContainer>
          </Header>
          <QRCode
            // QR code value
            value={code}
            // size of QR Code
            size={250}
            // Color of the QR Code (Optional)
            color={colors.fontDark}
            // Background Color of the QR Code (Optional)
            backgroundColor={colors.bg}
            // Logo of in the center of QR Code (Optional)
            // logo={{
            //   url:
            //     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
            // }}
            // Center Logo size  (Optional)
            logoSize={30}
            // Center Logo margin (Optional)
            logoMargin={2}
            // Center Logo radius (Optional)
            logoBorderRadius={15}
            // Center Logo background (Optional)
            logoBackgroundColor="yellow"
          />
          <Message>
            Apresente este código ao recepcionista para o acesso ao evento
          </Message>
        </ContainerModal>
      </View>
    </Modal>
  );
}

export default ModalQrCode;

ModalQrCode.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
