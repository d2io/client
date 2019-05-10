/*
 *
 * Product reducer
 *
 */
import produce from 'immer';
import {
  FETCH_PRODUCT_TYPE_FAILED,
  FETCH_PRODUCT_TYPE_SUCCESS,
} from './constants';

export const initialState = {
  productTypeList: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PRODUCT_TYPE_SUCCESS:
        draft.productTypeList = action.productTypes;
        break;
      case FETCH_PRODUCT_TYPE_FAILED:
        draft.error = action.error;
        break;
    }
  });

export default productReducer;
