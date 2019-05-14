/*
 *
 * Product reducer
 *
 */
import produce from 'immer';
import {
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_TYPE_FAILED,
  FETCH_PRODUCT_TYPE_SUCCESS,
} from './constants';

export const initialState = {
  productTypeList: [],
  productList: [],
  error: {
    product: {},
    type: {},
  },
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PRODUCT_TYPE_SUCCESS:
        draft.productTypeList = action.productTypes;
        break;
      case FETCH_PRODUCT_TYPE_FAILED:
        draft.error.type = action.error;
        break;
      case FETCH_PRODUCT_SUCCESS:
        draft.productList = action.products;
        break;
      case FETCH_PRODUCT_FAILED:
        draft.error.product = action.error;
        break;
    }
  });

export default productReducer;
