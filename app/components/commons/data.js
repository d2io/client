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
    name: 'Picture Type Add OR Update',
    exact: true,
    component: pages.pictureTypeAddOrUpdatePage,
  },
];

export { dashboardRoutes };