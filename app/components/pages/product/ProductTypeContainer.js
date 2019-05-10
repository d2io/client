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
  makeSelectProductTypeError,
  makeSelectProductTypeList,
} from 'containers/Product/selectors';
import { requestProductType } from 'containers/Product/actions';
import ProductType from './ProductType';

const mapStateToProps = createStructuredSelector({
  productTypeList: makeSelectProductTypeList(),
  error: makeSelectProductTypeError(),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllType: () => dispatch(requestProductType()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductType);
