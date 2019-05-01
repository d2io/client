/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import DashboardPage from './DashboardPage';
import PicturePage from './picture/PicturePage';
import PictureTypePage from './picture-type/PictureTypeContainer';
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
