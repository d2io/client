import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the entity state domain
 */

const selectEntityDomain = state => state.entity || initialState;

const makeSelectEntityList = () =>
  createSelector(
    selectEntityDomain,
    substate => substate.entities,
  );

const makeSelectEntityError = () =>
  createSelector(
    selectEntityDomain,
    substate => substate.error,
  );

export { selectEntityDomain, makeSelectEntityList, makeSelectEntityError };
