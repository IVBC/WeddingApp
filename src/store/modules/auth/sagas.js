import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { code } = payload;

    if (code === '') {
      // Alert.alert('Falha na autenticação', 'Informe a senha do seu convite');
      yield put(signFailure('Informe a senha do seu convite'));
      return;
    }
    // yield put(signInSuccess('123', { name: 'isaque' }));
    const response = yield call(api.get, `families/${code}`);

    const { data: user } = response;

    if (!user.isReceptionist) {
      Toast.show({
        position: 'bottom',
        text1: 'Olá 👋',
        text2:
          'Por favor, nao esqueça de confirmar os convidados aqui listados acima',
        visibilityTime: 10000,
      });
    }

    yield put(signInSuccess(code, user));
  } catch (err) {
    if (err.response) {
      const codeErro = err.response.status;
      if (codeErro === 401) {
        Alert.alert('Sentimos muito :(', 'Você não é mais convidado');
      } else {
        // Alert.alert('Falha na autenticação', 'A senha de convite é inválida.');

        yield put(signFailure('Senha de convite inválida'));
      }
    } else {
      Toast.show({
        position: 'top',
        text1: 'Erro de conexão de rede',
        text2: 'Falha na comunicação com o servidor, tente mais tarde...',
        visibilityTime: 3000,
        type: 'error',
      });
      yield put(
        signFailure('Falha na comunicação com o servidor, tente mais tarde...')
      );
    }
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
