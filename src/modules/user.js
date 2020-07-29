import { createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import { Map } from 'immutable';

// 액션타입 정의
const UPDATE_ID = 'user/UPDATE_ID';

// 액션생성함수 정의
export const updateId = createAction(UPDATE_ID);

// 초기값
const initialState = Map({
  userId: undefined,
})

export default applyPenders(handleActions({
  [UPDATE_ID]: (state, action) => {
    return state.set('userId', action.payload)
  },
}, initialState), []);