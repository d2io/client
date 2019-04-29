/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import pages from 'components/pages';
import Admin from '../../components/Admin';
import Login from '../Auth/LoginContainer';

import 'assets/css/index.css?v=1.6.0';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/404" component={pages.notfound} />
        <Route component={Admin} />
        <Route render={() => <Redirect path="/404" />} />
      </Switch>
    </div>
  );
}
