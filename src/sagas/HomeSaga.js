import {put, takeLatest, call} from 'redux-saga/effects';
import {HOME_API_CALL} from '../redux/actions/types';
import {
  homeApiSuccessAction,
  homeApiFailureAction,
  loaderForHomeAction
} from '../redux/actions';
import getData from '../service/api';

function* home(props) {
  try {
    yield put(loaderForHomeAction(true));
    console.log('props', props);
    const response = yield call(getData, props.payload);
    console.log("response", response)
    const responseData = response.results;
    yield put(homeApiSuccessAction(responseData));
    yield put(loaderForHomeAction(false));
  } catch (error) {
    yield put(loaderForHomeAction(false));
    yield put(homeApiFailureAction(error));
  }
}

export default function* watchHomeApi() {
  yield takeLatest(HOME_API_CALL, home);
}
