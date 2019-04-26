/*
 *
 * Auth actions
 *
 */

import {
  INIT_ROUTE_NAME,
  INIT_ROUTE_NAME_FAILED,
  INIT_ROUTE_NAME_SUCCESS,
  SET_CURRENT_USER,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
} from './constants';

// sign in actions
export const signInRequest = userData => ({
  type: SIGNIN_REQUEST,
  userData,
});

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo,
});

export const signInFailed = error => ({
  type: SIGNIN_FAILURE,
  error,
});

// sign out actions
export const signoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

export const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
  payload: {},
});

// init route name
export const initRouteName = () => ({
  type: INIT_ROUTE_NAME,
});

export const initRouteNameSuccess = routes => ({
  type: INIT_ROUTE_NAME_SUCCESS,
  routes,
});

export const initRouteNameFailed = error => ({
  type: INIT_ROUTE_NAME_FAILED,
  error,
});
