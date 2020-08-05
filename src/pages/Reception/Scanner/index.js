import React, { useState } from 'react';
import {
  View,
  WebView,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import { Container } from './styles';
import Background from '~/components/Background';
import Check from './Check';

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
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState(null);

  const [scannerRef, setScannerRef] = useState(null);

  const handleButton = () => {
    setSuccess(false);
    scannerRef.reactivate();
  };

  const onSuccess = async (e) => {
    setCode(e.data);
  };

  return (
    <Background>
      <Container>
        {!code ? (
          <QRCodeScanner
            onRead={onSuccess}
            showMarker
            checkAndroid6Permissions
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
          <Check />
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
