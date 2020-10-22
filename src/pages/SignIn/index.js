import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  SafeAreaView,
  Animated,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { signInRequest } from '../../store/modules/auth/actions';

import colors from '~/styles/colors';

import {
  Container,
  Header,
  Body,
  Footer,
  Form,
  Logo,
  FormInput,
  SubmitButton,
  LogoFlor,
  Content,
} from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [keyBoardShow, setKeyBoardShow] = useState(false);

  const [opacity, _] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.timing(opacity, {
          toValue: 300,
          duration: 1000,
        }).start();
        setKeyBoardShow(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
        }).start();
        setKeyBoardShow(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [opacity]);

  const handleSubmit = useCallback(
    ({ id }) => {
      dispatch(signInRequest(id));
    },
    [dispatch]
  );

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          style={{
            transform: [{ translateY: Animated.multiply(opacity, -1) }],
          }}
        >
          <LogoFlor />
        </Header>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
          >
            <StatusBar backgroundColor={colors.bg} barStyle="dark-content" />
            {/* <Content> */}

            <Body>
              <Logo />
              <Form ref={formRef} onSubmit={handleSubmit}>
                <FormInput
                  name="id"
                  placeholder="Digite a senha do seu convite"
                  returnKeyType="send"
                  autoCorrect={false}
                  autCapitalize="none"
                  onSubmitEditing={handleSubmit}
                />

                <SubmitButton
                  loading={loading}
                  onPress={() => formRef.current.submitForm()}
                >
                  ENTRAR
                </SubmitButton>
              </Form>
            </Body>
          </ScrollView>
        </KeyboardAvoidingView>

        <Footer style={{ transform: [{ translateY: opacity }] }}>
          <LogoFlor />
        </Footer>
      </SafeAreaView>
    </Container>
  );
}
