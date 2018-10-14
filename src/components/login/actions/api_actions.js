import axios from 'axios';

export const API_POST_AUTH = 'API_POST_AUTH';

export function postAuth(loginForm) {
  console.log(loginForm);
  const request = axios.post(`/api-token-auth/`, loginForm);
  return {
    type: API_POST_AUTH,
    payload: request
  };
}
