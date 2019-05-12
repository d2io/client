import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the product state domain
 */

const selectProductDomain = state => state.product || initialState;

const makeSelectProduct = () =>
  createSelector(
    selectProductDomain,
    substate => substate,
  );

const makeSelectProductTypeList = () =>
  createSelector(
    selectProductDomain,
    substate => substate.productTypeList,
  );

const makeSelectProductTypeError = () =>
  createSelector(
    selectProductDomain,
    substate => substate.error,
  );

export {
  selectProductDomain,
  makeSelectProduct,
  makeSelectProductTypeList,
  makeSelectProductTypeError,
};
