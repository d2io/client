/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Login from 'components/pages/LoginPage';

import { makeSelectUser, makeSelectError } from './selectors';
import { signInRequest } from './actions';

const mapStateToProps = createStructuredSelector({
  auth: makeSelectUser(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  onSignIn: userData => dispatch(signInRequest(userData)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
