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
import Routes from '../../components/commons/Routes';
import Login from '../Auth/LoginContainer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/404" component={pages.notfound} />
        <Route component={Routes} />
        <Route render={() => <Redirect path="/404" />} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
