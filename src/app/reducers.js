import { combineReducers } from 'redux';
import usersReducer from './modules/users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
