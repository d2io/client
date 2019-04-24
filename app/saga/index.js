/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import { all, call } from 'redux-saga/effects';
import authSaga from 'containers/Auth/saga';

const getRouterSaga = function* rootSaga() {
  yield all([call(authSaga)]);
};

export default getRouterSaga;
