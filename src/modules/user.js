import { createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';

// 액션타입 정의
const LOG_IN = 'user/LOG_IN';

// 액션생성함수 정의
export const login = createAction(LOG_IN);

// 초기값
const initialState = {
  login: false,
};

export default applyPenders(handleActions({
  [LOG_IN]: (state) => ({
    ...state,
    login: true,
  }),
}, initialState), []);
