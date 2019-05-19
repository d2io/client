/**
 * Author: DuongHan
 * Created: 5/10/19
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect/lib/index';
import { compose } from 'redux';
import {
  makeSelectEntityError,
  makeSelectEntityList,
} from 'containers/Entity/selectors';
import { fetchEntity } from 'containers/Entity/actions';
import Entity from './Entity';

const mapStateToProps = createStructuredSelector({
  entities: makeSelectEntityList(),
  error: makeSelectEntityError(),
});

const mapDispatchToProps = dispatch => ({
  onFetchEntity: url => dispatch(fetchEntity(url)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Entity);
