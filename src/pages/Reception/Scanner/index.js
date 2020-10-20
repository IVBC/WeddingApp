import React, { useState, useCallback } from 'react';
import {
  View,
  WebView,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
  Vibration,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import { Container } from './styles';
import Background from '~/components/Background';
import Check from './Check';
import api from '~/services/api';

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

  cameraContainer: {
    // height: Dimensions.get('window').height,
  },
});

const Scanner = () => {
  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(false);

  const [scannerRef, setScannerRef] = useState(null);

  const reactivateScanner = useCallback(() => {
    setFamily(null);
    Vibration.vibrate();
    // scannerRef.reactivate();
  }, []);

  const onSuccess = useCallback(
    async (e) => {
      // console.log(e);
      setLoading(true);
      const code = e.data;

      api
        .get(`/families/${code}`)
        .then((response) => {
          setLoading(false);

          setFamily(response.data);
        })
        .catch(() => {
          setLoading(false);
          reactivateScanner();
        });
    },
    [reactivateScanner]
  );

  return (
    <Background>
      <Container>
        {!family ? (
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
            // bottomContent={
            //   <View>
            //     <Text style={styles.text}>OK. Got it!</Text>
            //   </View>
            // }
          />
        ) : (
          <Check family={family} reactivateScanner={reactivateScanner} />
        )}

        {/* <ModalWebView
          handleButton={this.handleButton}
          modalVisible={this.state.modalVisible}
          url={this.state.url}
          openLink={this.openLink}
        /> */}
      </Container>
    </Background>
  );
};

export default Scanner;
