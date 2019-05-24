/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import Entity from './entity/EntityContainer';
import EntityDetail from './entity/EntityDetail';
import Picture from './picture';

const pages = {
  login: LoginPage,
  dashboard: DashboardPage,
  entity: Entity,
  entityDetail: EntityDetail,
  picture: Picture,
  notfound: NotFoundPage,
};

export default pages;
