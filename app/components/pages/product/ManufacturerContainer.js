/**
 * Author: DuongHan
 * Created: 5/10/19
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectProductError,
  makeSelectProductList,
} from 'containers/Product/selectors';
import { fetchProduct } from 'containers/Product/actions';
import Product from './Product';

const mapStateToProps = createStructuredSelector({
  productList: makeSelectProductList(),
  error: makeSelectProductError(),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllType: () => dispatch(fetchProduct()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Product);
