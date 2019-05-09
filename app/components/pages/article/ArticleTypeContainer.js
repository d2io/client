/**
 *
 * Picture
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectArticleTypeError,
  makeSelectArticleTypeList,
} from 'containers/Article/selectors';
import { requestArticleType } from 'containers/Article/actions';
import ArticleType from './ArticleType';

const mapStateToProps = createStructuredSelector({
  articleTypeList: makeSelectArticleTypeList(),
  error: makeSelectArticleTypeError(),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllType: () => dispatch(requestArticleType()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ArticleType);
