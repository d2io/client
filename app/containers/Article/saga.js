import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ARTICLE_TYPE_REQUEST } from './constants';
import { fetchArticleTypeFailed, fetchArticleTypeSuccess } from './actions';

function* doFetchArticleType() {
  try {
    const res = yield call(axios.get, '/api/v1/article/types');
    yield put(fetchArticleTypeSuccess(res.data));
  } catch (e) {
    console.log(`Error is ${e}`);
    yield put(fetchArticleTypeFailed(e));
  }
}

export default function* pictureTypeSaga() {
  yield all([takeLatest(ARTICLE_TYPE_REQUEST, doFetchArticleType)]);
}
