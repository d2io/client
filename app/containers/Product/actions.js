/*
 *
 * Product actions
 *
 */

import {
  FETCH_PRODUCT_TYPE_FAILED,
  FETCH_PRODUCT_TYPE_SUCCESS,
  PRODUCT_TYPE_REQUEST,
} from './constants';

export const requestProductType = () => ({
  type: PRODUCT_TYPE_REQUEST,
});

export const fetchProductTypeSuccess = productTypes => ({
  type: FETCH_PRODUCT_TYPE_SUCCESS,
  productTypes,
});

export const fetchProductTypeFailed = error => ({
  type: FETCH_PRODUCT_TYPE_FAILED,
  error,
});
