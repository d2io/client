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

const makeSelectProductList = () =>
  createSelector(
    selectProductDomain,
    substate => substate.productList,
  );

const makeSelectProductTypeError = () =>
  createSelector(
    selectProductDomain,
    substate => substate.error.type,
  );

const makeSelectProductError = () =>
  createSelector(
    selectProductDomain,
    substate => substate.error.product,
  );

export {
  selectProductDomain,
  makeSelectProduct,
  makeSelectProductTypeList,
  makeSelectProductList,
  makeSelectProductTypeError,
  makeSelectProductError,
};
