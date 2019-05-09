/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import { all, call } from 'redux-saga/effects';
import authSaga from 'containers/Auth/saga';
import pictureSaga from 'containers/Picture/saga';
import articleSaga from 'containers/Article/saga';

const getRouterSaga = function* rootSaga() {
  yield all([call(authSaga), call(pictureSaga), call(articleSaga)]);
};

export default getRouterSaga;
