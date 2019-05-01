/**
 *
 * Picture
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PictureTypePage from 'components/pages/picture-type';
import {
  makeSelectPictureTypeList,
  makeSelectPictureTypeError,
} from 'containers/Picture/selectors';
import { requestPictureType } from 'containers/Picture/actions';

const mapStateToProps = createStructuredSelector({
  picTypeList: makeSelectPictureTypeList(),
  error: makeSelectPictureTypeError(),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllType: () => dispatch(requestPictureType()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PictureTypePage);
