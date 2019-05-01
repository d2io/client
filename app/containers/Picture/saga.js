import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PICTURE_TYPE_REQUEST } from './constants';
import { fetchPictureTypeFailed, fetchPictureTypeSuccess } from './actions';

function* doFetchPictureType() {
  try {
    const res = yield call(axios.get, '/api/v1/picture/types');
    yield put(fetchPictureTypeSuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchPictureTypeFailed(e));
  }
}

export default function* pictureTypeSaga() {
  yield all([takeLatest(PICTURE_TYPE_REQUEST, doFetchPictureType)]);
}
