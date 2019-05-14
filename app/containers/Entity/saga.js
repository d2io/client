import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ENTITY } from './constants';
import { fetchEntityFailed, fetchEntitySuccess } from './actions';

function* doFetchEntity(url) {
  try {
    const res = yield call(axios.get, `/api/v1${url}`);
    yield put(fetchEntitySuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchEntityFailed(e));
  }
}

export default function* productSaga() {
  yield all([takeLatest(FETCH_ENTITY, doFetchEntity)]);
}
