import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from './routes';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => (
      <PrivateRoute
        path={prop.path}
        exact={prop.exact}
        component={prop.component}
        key={key}
      />
    ))}
  </Switch>
);

export default switchRoutes;
