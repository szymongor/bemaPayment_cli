import { API_POST_AUTH, API_POST_AUTH_ERROR } from "../actions/api_actions";

const INITIAL_STATE = { token: null, isError: false };

function apiAuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_POST_AUTH_ERROR:
      return { ...state, isError: true };
    case API_POST_AUTH:
      return {
        ...state
        //token: action.payload.data.token
      };
    default:
      return state;
  }
}

export default apiAuthReducer;
