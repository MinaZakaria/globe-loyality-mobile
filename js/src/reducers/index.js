import { combineReducers } from 'redux';

import login from './login';
import users from './users';
import programs from './programs';
import userRoles from './userRoles';
import challenges from './challenges';

export default combineReducers({
  login,
  users,
  programs,
  userRoles,
  challenges,
});
