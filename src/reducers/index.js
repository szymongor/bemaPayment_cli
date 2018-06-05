import { combineReducers } from 'redux';
import ReducerApi from './reducer_api';

const rootReducer = combineReducers({
  api: ReducerApi
});

export default rootReducer;
