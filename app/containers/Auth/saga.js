import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setAuthToken } from 'utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { push } from 'connected-react-router/immutable';

import APINames from 'config/api/name';
import { INIT_ROUTE_NAME, SIGNIN_REQUEST, SIGNOUT_REQUEST } from './constants';

import {
  initRouteName,
  initRouteNameFailed,
  initRouteNameSuccess,
  setCurrentUser,
  signInFailed,
  signoutSuccess,
} from './actions';

// Individual exports for testing
function* doSignOut() {
  // remove token from Cookies
  Cookies.remove('token');

  // remove login header for future request
  setAuthToken(false);

  // set current user to empty object
  yield put(signoutSuccess());
  yield put(push('/'));
}

function* doSignIn(data) {
  try {
    const res = yield call(axios.post, APINames.SIGN_IN, data.userData);
    const { accessToken, tokenType } = res.data;
    const AUTH_TOKEN = `${tokenType} ${accessToken}`;

    // handleUpdate to cookies
    // if user check remember session, set expire cookie in 1w
    if (data.userData.isRemember) {
      Cookies.set('token', AUTH_TOKEN, { expires: 7 });
    } else {
      Cookies.set('token', AUTH_TOKEN);
    }

    // set token to Auth header
    setAuthToken(AUTH_TOKEN);

    // decode token to get user dataFake
    const plainData = jwtDecode(accessToken);

    yield put(setCurrentUser(plainData));
    yield put(initRouteName());

    // after login succeed, redirect from  login page to admin dashboard page (homepage)
    yield put(push('/'));
  } catch (err) {
    yield put(signInFailed(err));
  }
}

function* doInitRouteNames() {
  try {
    const res = yield call(axios.get, APINames.ROUTE_NAMES);
    const routes = res.data;
    yield put(initRouteNameSuccess(routes));
  } catch (e) {
    yield put(initRouteNameFailed(e));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(SIGNIN_REQUEST, doSignIn),
    takeLatest(SIGNOUT_REQUEST, doSignOut),
    takeLatest(INIT_ROUTE_NAME, doInitRouteNames),
  ]);
}
