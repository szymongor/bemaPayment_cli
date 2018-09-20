import { API_POST_AUTH, API_POST_AUTH_ERROR } from "../actions/api_actions";

const authorizationRouter = store => next => action => {
  switch (action.type) {
    case API_POST_AUTH: {
      let payload = action.payload;
      if (payload.status === 200) {
        console.log(action);
        // store.dispatch(
        //   showMessage('success', 'Successfully saved an event in database')
        // );
      } else {
        //store.dispatch(showMessage('danger', 'Connection Error'));
      }
    }
    case API_POST_AUTH_ERROR: {
      console.log("Error: " + action.payload);
      //store.dispatch(showMessage('danger', 'Connection Error'));
    }
  }
  let result = next(action);
  return result;
};

const authorizationMDL = [authorizationRouter];
export default authorizationMDL;
