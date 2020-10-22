import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { code } = payload;

    if (code === '') {
      Alert.alert('Falha na autenticação', 'Informe a senha do seu convite');
      yield put(signFailure());
      return;
    }
    // yield put(signInSuccess('123', { name: 'isaque' }));
    const response = yield call(api.get, `families/${code}`);

    const { data: user } = response;

    yield put(signInSuccess(code, user));
  } catch (err) {
    if (err.response) {
      const codeErro = err.response.status;
      if (codeErro === 401) {
        Alert.alert('Sentimos muito :(', 'Você não é mais convidado');
      } else {
        Alert.alert('Falha na autenticação', 'A senha de convite é inválida.');
      }
    } else {
      console.log(err);
      Alert.alert('Falha na autenticação', JSON.stringify(err));
    }
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
