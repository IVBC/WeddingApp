import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile() {
  try {
    const code = yield select((state) => state.auth.code);

    // console.log(code);
    // const response = yield call(api.put, 'users', profile);

    const response = yield call(api.get, `families/${code}`);

    const { data: user } = response;

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(user));
  } catch (err) {
    Alert.alert(
      'Falha na atualizacao',
      'Houve um erro na atualizacao do perfil, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
