/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import DashboardPage from './DashboardPage';
import PicturePage from './PicturePage';
import PictureTypePage from './PictureTypePage';
import PictureTypeDetailPage from './PictureTypeDetailPage';
import PictureTypeAddOrUpdatePage from './PictureTypeAddOrUpdatePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

const pages = {
  login: LoginPage,
  dashboard: DashboardPage,
  picture: PicturePage,
  pictureType: PictureTypePage,
  pictureTypeDetail: PictureTypeDetailPage,
  pictureTypeAddOrUpdatePage: PictureTypeAddOrUpdatePage,
  notfound: NotFoundPage,
};

export default pages;