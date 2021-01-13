export function updateProfileRequest() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}

export function updateProfileSuccess(user) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { user },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
