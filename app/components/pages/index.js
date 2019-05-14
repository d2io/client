/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import DashboardPage from './DashboardPage';
import PicturePage from './picture';
import PictureTypePage from './picture-type';
import PictureTypeDetailPage from './PictureTypeDetailPage';
import PictureTypeAddOrUpdatePage from './PictureTypeAddOrUpdatePage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import ArticleType from './article/ArticleTypeContainer';
import Product from './product/ProductContainer';
import ProductType from './product/ProductTypeContainer';
import Entity from './EntityContainer';

const pages = {
  login: LoginPage,
  dashboard: DashboardPage,
  picture: PicturePage,
  pictureType: PictureTypePage,
  pictureTypeDetail: PictureTypeDetailPage,
  pictureTypeAddOrUpdatePage: PictureTypeAddOrUpdatePage,
  articleType: ArticleType,
  product: Product,
  entity: Entity,
  productType: ProductType,
  notfound: NotFoundPage,
};

export default pages;
