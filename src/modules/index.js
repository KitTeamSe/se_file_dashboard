import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import attach, { attachSaga } from './attach';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({ attach, auth });

export function* rootSaga() {
  yield all([attachSaga(), authSaga()]);
}

export default rootReducer;
