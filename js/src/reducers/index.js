import { combineReducers } from 'redux';

import login from './login';
import challenges from './challenges';

export default combineReducers({
  login,
  challenges
});
