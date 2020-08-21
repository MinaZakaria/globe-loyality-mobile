import { combineReducers } from 'redux';

import login from './login';
import programs from './programs';
import userRoles from './userRoles';
import challenges from './challenges';

export default combineReducers({
  login,
  programs,
  userRoles,
  challenges,
});
