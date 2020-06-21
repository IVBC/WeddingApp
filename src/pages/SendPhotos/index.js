import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

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

export default function ConfirmDelivery() {
  const navigation = useNavigation();
  const [fileSource, setFileSource] = useState(null);
  // const {
  //   params: { deliveryId },
  // } = useRoute();

  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);

  const openPicker = useCallback(() => {
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
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      // e.preventDefault();
      // const unsubscribe = API.subscribe(userId, user => setUser(user));
      // return () => unsubscribe();
      // Do something manually
      // ...

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
          name: 'signature.jpg',
        });

        const {
          data: { id: signature_id },
        } = await api.post('files', dataFile);

        await api.put(`/delivery/${loading}/deliver`, {
          signature_id,
        });

        Alert.alert(
          'Produto entregue!',
          'A confirmação da entrega do produto foi realizada com sucesso.'
        );
        navigation.popToTop();
      } catch (err) {
        Alert.alert(
          'Não foi possível confirmar a entrega!',
          'Falha na comunicação com o servidor, verifique sua conexão com a internet.'
        );
      } finally {
        setLoading(false);
      }
    }
  }

  const handleTakePicture = useCallback(async () => {
    const options = { quality: 0.5, base64: true };
    const data = await cameraRef.current.takePictureAsync(options);

    await setImageUri(data.uri);
  }, []);

  return (
    <Background>
      <Container>
        <Content>
          {!imageUri ? (
            <CameraContainer>
              {/* <Camera
                ref={cameraRef}
                autoFocus={Camera.Constants.AutoFocus.on}
                flashMode={Camera.Constants.FlashMode.off}
                captureAudio={false}
              />
              <ButtonCamera onPress={handleTakePicture}>
                <ButtonCameraIcon name="camera-alt" />
              </ButtonCamera> */}

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
                }}
              >
                <ButtonCameraIcon name="close" />
              </ButtonCamera>
            </PhotoContainer>
          )}
          <SubmitButton
            disabled={!imageUri}
            onPress={handleUpload}
            loading={loading}
          >
            Enviar ao Datashow
          </SubmitButton>
        </Content>
      </Container>
    </Background>
  );
}
