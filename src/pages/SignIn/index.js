import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StatusBar } from 'react-native';

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
} from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = useCallback(
    ({ id }) => {
      dispatch(signInRequest(id));
    },
    [dispatch]
  );

  return (
    <Container>
      <StatusBar backgroundColor={colors.bg} barStyle="dark-content" />
      <Header>
        <LogoFlor />
      </Header>
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
      <Footer>
        <LogoFlor />
      </Footer>
    </Container>
  );
}
