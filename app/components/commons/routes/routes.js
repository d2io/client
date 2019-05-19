import pages from 'components/pages';

const routes = [
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
    path: '/:entity',
    name: 'Entity',
    exact: true,
    component: pages.entity,
  },
];

export default routes;
