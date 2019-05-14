import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCT, FETCH_PRODUCT_TYPE } from './constants';
import {
  fetchProductFailed,
  fetchProductSuccess,
  fetchProductTypeFailed,
  fetchProductTypeSuccess,
} from './actions';

function* doFetchProductType() {
  try {
    const res = yield call(axios.get, '/api/v1/product/types');
    yield put(fetchProductTypeSuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchProductTypeFailed(e));
  }
}

function* doFetchProduct() {
  try {
    const res = yield call(axios.get, '/api/v1/product/all');
    yield put(fetchProductSuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchProductFailed(e));
  }
}

export default function* productSaga() {
  yield all([
    takeLatest(FETCH_PRODUCT_TYPE, doFetchProductType),
    takeLatest(FETCH_PRODUCT, doFetchProduct),
  ]);
}
