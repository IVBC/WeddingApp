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
  const codeInputRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [keyBoardShow, setKeyBoardShow] = useState(false);

  const [opacity, _] = useState(new Animated.Value(0));
  const [shakeAnimation, __] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.spring(opacity, {
          toValue: 300,
          // duration: 10000,
          bounciness: 15,
          // speed: 0.8,
        }).start();
        setKeyBoardShow(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.spring(opacity, {
          toValue: 0,
          // duration: 10000,
          bounciness: 15,
          // speed: 0.8,
        }).start();
        setKeyBoardShow(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [opacity]);

  const startShake = useCallback(() => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [shakeAnimation]);

  const handleSubmit = useCallback(
    ({ id }) => {
      dispatch(signInRequest(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (error) {
      startShake();
      // codeInputRef.current?.focus();
      formRef.current.setFieldError('id', error);
    } else {
      formRef.current?.setErrors({});
    }
  }, [error, startShake]);

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
                <Animated.View
                  style={{ transform: [{ translateX: shakeAnimation }] }}
                >
                  <FormInput
                    ref={codeInputRef}
                    name="id"
                    placeholder="Senha do convite"
                    returnKeyType="send"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onSubmitEditing={handleSubmit}
                    icon="key-variant"
                  />
                </Animated.View>

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
