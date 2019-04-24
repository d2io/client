/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import pages from 'components/pages';
import Sidebar from 'base/components/Sidebar';
import PrivateRoute from './PrivateRoute';

const Routes = props => {
  const [isMobile, setMobileState] = useState(false);

  return (
    <div>
      <Sidebar handleDrawerToggle={setMobileState} open={isMobile} {...props} />

      <Switch>
        <PrivateRoute exact path="/" component={pages.dashboard} />
        <PrivateRoute path="/dashboard" component={pages.dashboard} />
        <PrivateRoute path="/picture" component={pages.picture} />
        <PrivateRoute
          exact
          path="/picture-type"
          component={pages.pictureType}
        />
        <PrivateRoute
          exact
          path="/picture-type/detail"
          component={pages.pictureTypeDetail}
        />
        <PrivateRoute
          exact
          path="/picture-type/update"
          component={pages.pictureTypeAddOrUpdatePage}
        />
      </Switch>
    </div>
  );
};

export default Routes;
