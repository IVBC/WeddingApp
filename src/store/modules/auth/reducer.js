import produce from 'immer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE = {
  code: null,
  signed: false,
  loading: false,
  error: null,
};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        draft.error = null;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.code = action.payload.code;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.code = null;
        draft.signed = false;
        break;
      }
      case '@auth/SET_LOADING': {
        draft.loading = action.payload;
        break;
      }
      default:
    }
  });
};

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['loading', 'error'],
};

export default persistReducer(persistConfig, auth);
