export function signInRequest(code) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { code },
  };
}

export function signInSuccess(code, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { code, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function setLoading(loading) {
  return {
    type: '@auth/SET_LOADING',
    payload: loading,
  };
}
