import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import attach, { attachSaga } from './attach';

const rootReducer = combineReducers({ attach });

export function* rootSaga() {
  yield all([attachSaga()]);
}

export default rootReducer;
