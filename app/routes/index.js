/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LoginPage from 'components/auth/Login';
import HomePage from 'containers/HomePage/Loadable';

export default (
  <Route path="/" component={HomePage}>
    <IndexRoute component={LoginPage} />
    <Route path="login" component={LoginPage} />
  </Route>
);
