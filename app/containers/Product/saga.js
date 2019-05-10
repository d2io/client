import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { PRODUCT_TYPE_REQUEST } from './constants';
import { fetchProductTypeFailed, fetchProductTypeSuccess } from './actions';

function* doFetchProductType() {
  try {
    const res = yield call(axios.get, '/api/v1/product/types');
    yield put(fetchProductTypeSuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchProductTypeFailed(e));
  }
}

export default function* pictureTypeSaga() {
  yield all([takeLatest(PRODUCT_TYPE_REQUEST, doFetchProductType)]);
}
