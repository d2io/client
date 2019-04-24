/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated =
    !!Cookies.get('token') && !!jwtDecode(Cookies.get('token'));

  return (
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
};

PrivateRoute.propTypes = {
  component: PropTypes.object,
  location: PropTypes.object,
};

export default PrivateRoute;
