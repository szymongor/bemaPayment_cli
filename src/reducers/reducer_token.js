import { API_POST_AUTH } from '../components/login/actions/api_actions';

const INITIAL_STATE = { token: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_POST_AUTH:
      //console.log(action.payload.data.token);
      return {
        ...state
        //token: action.payload.data.token
      };
    default:
      return state;
  }
}
