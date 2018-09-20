import axios from "axios";

export const API_POST_AUTH = "API_POST_AUTH";
export const API_POST_AUTH_ERROR = "API_POST_AUTH_ERROR";

export function postAuthSuccess(data) {
  return {
    type: API_POST_AUTH,
    payload: data
  };
}

export function postAuthFailed(error) {
  return {
    type: API_POST_AUTH_ERROR,
    payload: error
  };
}

export function postAuth(loginForm) {
  return dispatch => {
    axios
      .post(`/api/api-token-auth/`, loginForm)
      .then(response => {
        dispatch(postAuthSuccess(response.data));
      })
      .catch(error => {
        dispatch(postAuthFailed(error));
      });
  };
}
