import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const switchRoutes = routes => (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            exact={prop.exact}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

export { switchRoutes };
