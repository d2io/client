import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */

const selectAuthDomain = state => state.auth || initialState;

const makeSelectUser = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.user,
  );

const makeSelectError = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.error,
  );

const makeSelectRoutes = () =>
  createSelector(
    selectAuthDomain,
    substate => substate.routes,
  );

export { makeSelectUser, makeSelectError, makeSelectRoutes };
