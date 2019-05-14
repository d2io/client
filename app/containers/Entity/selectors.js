import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the entity state domain
 */

const selectEntityDomain = state => state.entity || initialState;

const makeSelectEntity = () =>
  createSelector(
    selectEntityDomain,
    substate => substate,
  );

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

export default makeSelectEntity;
export {
  selectEntityDomain,
  makeSelectEntity,
  makeSelectEntityList,
  makeSelectEntityError,
};
