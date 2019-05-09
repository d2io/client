import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { dashboardRoutes } from './routes';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => (
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
