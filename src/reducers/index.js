import { combineReducers } from 'redux';
import ReducerApi from './reducer_token';

const rootReducer = combineReducers({
  api: ReducerApi
});

export default rootReducer;
