import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Routes from './Routes';

const switchRoutes = (
  <Switch>
    {Routes.data.map((prop, key) => (
      <PrivateRoute
        path={prop.path}
        exact={prop.exact}
        component={prop.component}
        key={key}
      />
    ))}
  </Switch>
);

export { switchRoutes };
