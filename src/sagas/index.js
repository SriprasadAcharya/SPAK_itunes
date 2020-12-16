import {all} from 'redux-saga/effects';
import watchHomeApi from './HomeSaga';

export default function* rootSaga() {
  yield all([ 
    watchHomeApi()]);
};