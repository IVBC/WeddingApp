import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View,
  WebView,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
  Vibration,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {
  Container,
  Button,
  ButtonText,
  ContainerInput,
  Icon,
  SearchInput,
} from './styles';
import Background from '~/components/Background';
import ButtonPrimary from '~/components/Button';
import Check from './Check';
import api from '~/services/api';
import colors from '~/styles/colors';
import {
  ButtonContainer,
  CloseButton,
  CloseIcon,
  Header,
  TitleHeader,
} from '~/components/Modals/ModalConfirmation/styles';
import { TextError } from '~/components/Input/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },

  touchable: {
    // padding: 16,
    backgroundColor: 'red',
    flex: 1,
  },

  text: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  modalCode: {
    flex: 0.3,
    backgroundColor: colors.bg,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    padding: 16,
    paddingTop: 8,
  },
  cameraContainer: {
    // height: Dimensions.get('window').height,
    // flex: 1,
  },
});

const Scanner = () => {
  const navigation = useNavigation();

  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalCodeVisible, setModalCodeVisible] = useState(false);
  const [scannerRef, setScannerRef] = useState(null);
  const codeRef = useRef(null);
  const [error, setError] = useState(null);

  const reactivateScanner = useCallback(() => {
    setFamily(null);
    Vibration.vibrate();
    // scannerRef.reactivate();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      setFamily(null);
      setLoading(false);
      setError(null);
      setModalCodeVisible(false);
    });

    return unsubscribe;
  }, [navigation]);

  const onSuccess = useCallback(
    async (e) => {
      const code = e.data;
      setError(null);
      Keyboard.dismiss();

      if (!code) {
        setError('Informe a senha');
        return;
      }

      setLoading(true);

      api
        .get(`/families/${code}`)
        .then((response) => {
          setLoading(false);
          setModalCodeVisible(false);
          setError(null);
          setFamily(response.data);
        })
        .catch((err) => {
          setLoading(false);
          reactivateScanner();

          if (err.response) {
            const codeErro = err.response.status;
            if (codeErro === 401) {
              Toast.show({
                position: 'top',
                text1: 'Sentimos muito :(',
                text2: 'Você não é mais convidado',
                visibilityTime: 3000,
                type: 'error',
              });
            } else {
              setError('Senha de convite inválida');
            }
          } else {
            Toast.show({
              position: 'top',
              text1: 'Erro de conexão de rede',
              text2: 'Falha na comunicação com o servidor, tente mais tarde...',
              visibilityTime: 3000,
              type: 'error',
            });
          }
        });
    },
    [reactivateScanner]
  );

  const toggleModalCode = useCallback(() => {
    setModalCodeVisible((visible) => !visible);
  }, []);

  return (
    <Background>
      <Container>
        <Modal
          isVisible={modalCodeVisible}
          style={{ justifyContent: 'flex-end', margin: 0 }}
          onBackdropPress={toggleModalCode}
          backdropColor="transparent"
        >
          <KeyboardAvoidingView
            style={{
              ...styles.modalCode,
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
            keyboardVerticalOffset={100}
          >
            <Header>
              <TitleHeader>Quem são os convidados?</TitleHeader>

              <ButtonContainer>
                <CloseButton
                  onPress={() => {
                    Keyboard.dismiss();
                    toggleModalCode();
                  }}
                >
                  <CloseIcon />
                </CloseButton>
              </ButtonContainer>
            </Header>
            <ContainerInput isErrored={!!error}>
              <Icon isErrored={!!error} />
              <SearchInput
                ref={codeRef}
                placeholder="Senha do convite"
                returnKeyType="send"
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={() => {
                  onSuccess({ data: codeRef.current._lastNativeText });
                }}
              />
              {error && <TextError>{error}</TextError>}
            </ContainerInput>
            <ButtonPrimary
              loading={loading}
              onPress={() => {
                onSuccess({ data: codeRef.current._lastNativeText });
              }}
            >
              Verificar
            </ButtonPrimary>
          </KeyboardAvoidingView>
        </Modal>
        {!family ? (
          <>
            <QRCodeScanner
              onRead={onSuccess}
              showMarker
              checkAndroid6Permissions
              reactivate
              reactivateTimeout={2000}
              ref={(elem) => {
                setScannerRef(elem);
              }}
              cameraStyle={styles.cameraContainer}
            />
            <Button
              onPress={() => {
                setError(null);
                toggleModalCode();
              }}
            >
              <ButtonText>Inserir senha</ButtonText>
            </Button>
          </>
        ) : (
          <Check family={family} reactivateScanner={reactivateScanner} />
        )}
      </Container>
    </Background>
  );
};

export default Scanner;
