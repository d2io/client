/* eslint-disable no-underscore-dangle */
/**
 * Author: DuongHan
 * Created: 5/14/19
 *
 */

import pages from '../pages';

class Routes {
  constructor(routes) {
    this._routes = routes || [];
  }

  set data(newRoutes) {
    this._routes = newRoutes.map(route => ({
      path: route.link,
      name: route.name,
      exact: true,
      component: pages.entity,
    }));
  }

  get data() {
    return this._routes;
  }
}

export default new Routes();
