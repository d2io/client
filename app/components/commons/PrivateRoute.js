/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectCheckAuthorized } from 'containers/Auth/selectors';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  Component: PropTypes.any,
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectCheckAuthorized(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(PrivateRoute);
