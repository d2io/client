/*
 *
 * Product actions
 *
 */

import {
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_TYPE_FAILED,
  FETCH_PRODUCT_TYPE_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_TYPE,
  FETCH_MANUFACTURER,
  FETCH_MANUFACTURER_FAILED,
  FETCH_DISTRIBUTOR_SUCCESS,
  FETCH_DISTRIBUTOR,
  FETCH_MANUFACTURER_SUCCESS,
  FETCH_DISTRIBUTOR_FAILED,
} from './constants';

// Product Type
export const fetchProductType = () => ({
  type: FETCH_PRODUCT_TYPE,
});

export const fetchProductTypeSuccess = productTypes => ({
  type: FETCH_PRODUCT_TYPE_SUCCESS,
  productTypes,
});

export const fetchProductTypeFailed = error => ({
  type: FETCH_PRODUCT_TYPE_FAILED,
  error,
});

// Product
export const fetchProduct = () => ({
  type: FETCH_PRODUCT,
});

export const fetchProductSuccess = products => ({
  type: FETCH_PRODUCT_SUCCESS,
  products,
});

export const fetchProductFailed = error => ({
  type: FETCH_PRODUCT_FAILED,
  error,
});

// Manufacturer
export const fetchManufacturer = () => ({
  type: FETCH_MANUFACTURER,
});

export const fetchManufacturerSuccess = products => ({
  type: FETCH_MANUFACTURER_SUCCESS,
  products,
});

export const fetchManufacturerFailed = error => ({
  type: FETCH_MANUFACTURER_FAILED,
  error,
});

// Distributor
export const fetchDistributor = () => ({
  type: FETCH_DISTRIBUTOR,
});

export const fetchDistributorSuccess = products => ({
  type: FETCH_DISTRIBUTOR_SUCCESS,
  products,
});

export const fetchDistributorFailed = error => ({
  type: FETCH_DISTRIBUTOR_FAILED,
  error,
});
