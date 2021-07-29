import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import attach, { attachSaga } from './attach';
import auth, { authSaga } from './auth';
import sideMenu from './sideMenu';

const rootReducer = combineReducers({ attach, auth, sideMenu });

export function* rootSaga() {
  yield all([attachSaga(), authSaga()]);
}

export default rootReducer;
