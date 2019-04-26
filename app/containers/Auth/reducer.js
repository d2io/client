/*
 *
 * Auth reducer
 *
 */
import produce from 'immer';
import isEmpty from 'utils/checkEmpty';
import {
  INIT_ROUTE_NAME_SUCCESS,
  SET_CURRENT_USER,
  SIGNIN_FAILURE,
  SIGNOUT_SUCCESS,
} from './constants';

export const initialState = {
  isAuthorized: false,
  user: {},
  error: {},
  routes: [],
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_CURRENT_USER:
        draft.isAuthorized = !isEmpty(action.userInfo);
        draft.user = action.userInfo;
        break;
      case SIGNIN_FAILURE:
        draft.error = action.err;
        break;
      case SIGNOUT_SUCCESS:
        draft.isAuthorized = false;
        draft.user = {};
        break;
      case INIT_ROUTE_NAME_SUCCESS:
        draft.routes = action.routes;
        break;
    }
  });

export default authReducer;
