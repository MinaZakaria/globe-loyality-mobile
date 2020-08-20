import { combineReducers } from 'redux';

import login from './login';
import userRoles from './userRoles';
import challenges from './challenges';

export default combineReducers({
  login,
  userRoles,
  challenges,
});
