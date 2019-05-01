import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the picture state domain
 */

const selectPictureDomain = state => state.picture || initialState;

const makeSelectPictureTypeList = () =>
  createSelector(
    selectPictureDomain,
    substate => substate.picTypeList,
  );

const makeSelectPictureTypeError = () =>
  createSelector(
    selectPictureDomain,
    substate => substate.error,
  );

export {
  selectPictureDomain,
  makeSelectPictureTypeList,
  makeSelectPictureTypeError,
};
