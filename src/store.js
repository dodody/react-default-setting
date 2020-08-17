/* eslint-disable */
import { createStore, compose, applyMiddleware } from 'redux';
// redux 미들웨어 라이브러리
import ReduxThunk from "redux-thunk";
import penderMiddleware from "redux-pender";

let modules = require('modules/Reducer').default;

// 개발 모드일 때만 Redux Devtools를 적용합니다.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = devtools || compose;

// redux store 생성
const store = createStore(
  modules,
  composeEnhancer(applyMiddleware(ReduxThunk, penderMiddleware())),
);

export default store;