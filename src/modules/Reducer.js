import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import user from './user';

export default combineReducers({
  user, // 채널 디테일 페이지

  // 리덕스 미들웨어
  pender: penderReducer,
});
