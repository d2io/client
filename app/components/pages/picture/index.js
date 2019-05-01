/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */
import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectPictureTypeList,
  makeSelectPictureTypeError,
} from 'containers/Picture/selectors';
import PicturePage from './PicturePage';

const mapStateToProps = createStructuredSelector({
  picTypeList: makeSelectPictureTypeList(),
  error: makeSelectPictureTypeError(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(PicturePage);
