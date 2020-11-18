import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Content,
  CameraContainer,
  SubmitButton,
  Camera,
  Text,
  Preview,
  PhotoContainer,
  ButtonCamera,
  ButtonCameraIcon,
} from './styles';

export default function SendPhotos() {
  const navigation = useNavigation();
  const [fileSource, setFileSource] = useState(null);
  const [sendDisabled, setSendDisabled] = useState(false);

  const family = useSelector((state) => state.user.profile);

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);

  const openPicker = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'We need your permission',
      }
    );

    const options = {
      title: 'Selecione a Image',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Abrir Galeria',
      cancelButtonTitle: 'Voltar',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'CasamentoDenise&Isaque',
      },
    };

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');

      ImagePicker.showImagePicker(options, (response) => {
        setLoadingImage(true);
        if (response.error) {
          Alert.alert('Erro!', response.error);
          navigation.goBack();
          // eslint-disable-next-line no-empty
        } else if (response.didCancel) {
          navigation.goBack();
        } else {
          const source = response;

          setFileSource(source);
          setImageUri(source.uri);
          // ImageResizer.createResizedImage(response.uri, 500, 500, 'JPEG', 70)
          //   .then(({ uri }) => {
          //     const prefix = new Date().getTime();

          //     const img = {
          //       uri,
          //       type: response.type,
          //       name: `${prefix}.jpg`,
          //     };

          //     const tempImage = image;

          //     tempImage[index] = img;

          //     setImage(tempImage);
          //   })
          //   .catch((err) => {
          //     Alert.alert(
          //       translate('imageError'),
          //       translate('imageErrorDescription')
          //     );
          //   });
        }
      });
    } else {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Ae! Nós agradecemos! 🤩❤️',
        text2:
          'O envio da imagem foi realizado com sucesso e logo ela será exibida 😊',
        visibilityTime: 10000,
      });
    }
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      // e.preventDefault();
      // const unsubscribe = API.subscribe(userId, user => setUser(user));
      // return () => unsubscribe();
      // Do something manually
      // ...
      setImageUri(null);
      setSendDisabled(false);

      openPicker();
    });
    openPicker();

    return unsubscribe;
  }, [navigation, openPicker]);

  async function handleUpload() {
    if (imageUri) {
      try {
        setLoading(true);

        const dataFile = new FormData();

        dataFile.append('file', {
          type: 'image/jpg',
          uri: imageUri,
          name: fileSource.fileName,
        });

        await api.post(`files/${family.code}/photo`, dataFile);

        setSendDisabled(true);

        Toast.show({
          position: 'bottom',
          text1: 'Ae! Nós agradecemos! 🤩❤️',
          text2:
            'O envio da imagem foi realizado com sucesso e logo ela será exibida 😊',
          visibilityTime: 10000,
        });
        // navigation.popToTop();
      } catch (err) {
        setSendDisabled(false);
        // Alert.alert(
        //   'Não foi possível enviar a imagem para o Datashow!',
        //   'Falha na comunicação com o servidor, verifique sua conexão com a internet.'
        // );

        Alert.alert('error', JSON.stringify(err));
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Background>
      <Container>
        <Content>
          {!imageUri ? (
            <CameraContainer>
              <ButtonCameraIcon name="camera-alt" color="#6C89B2" size={42} />
              <Text>{loadingImage ? 'Carregando' : 'Aguardando'}...</Text>
            </CameraContainer>
          ) : (
            <PhotoContainer>
              <Preview
                source={{ uri: imageUri }}
                onLoad={(e) => setLoadingImage(false)}
              />
              <ButtonCamera
                onPress={() => {
                  setImageUri(null);
                  openPicker();
                  setSendDisabled(false);
                }}
              >
                <ButtonCameraIcon name="close" />
              </ButtonCamera>
            </PhotoContainer>
          )}
          {!sendDisabled && (
            <SubmitButton
              disabled={!imageUri || sendDisabled}
              onPress={handleUpload}
              loading={loading}
            >
              Enviar ao Datashow
            </SubmitButton>
          )}
        </Content>
      </Container>
    </Background>
  );
}
