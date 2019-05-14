import pages from 'components/pages';

const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    exact: true,
    component: pages.dashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: false,
    component: pages.dashboard,
  },
  {
    path: '/picture',
    name: 'Picture',
    exact: false,
    component: pages.picture,
  },
  {
    path: '/picture-type',
    name: 'Picture Detail',
    exact: true,
    component: pages.pictureType,
  },
  {
    path: '/picture-type/detail',
    name: 'Picture Type Detail',
    exact: true,
    component: pages.pictureTypeDetail,
  },
  {
    path: '/picture-type/update',
    name: 'Picture Type Update',
    exact: true,
    component: pages.pictureTypeAddOrUpdatePage,
  },
  {
    path: '/article-type',
    name: 'Article Type',
    exact: true,
    component: pages.articleType,
  },
  {
    path: '/product-type',
    name: 'Product Type',
    exact: true,
    component: pages.productType,
  },
  {
    path: '/product',
    name: 'Product',
    exact: true,
    component: pages.product,
  },
];

let routes = [];

const setRoutes = raw =>
  (routes = [
    ...dashboardRoutes,
    ...raw.map(route => ({
      path: route.link,
      name: route.name,
      exact: true,
      component: pages.entity,
    })),
  ]);

const getRoutes = () => routes;

export { dashboardRoutes, setRoutes };
