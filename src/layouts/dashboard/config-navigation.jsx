import SvgColor from '../../components/svg-color/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'courses',
    path: '/courses',
    icon: icon('ic_user'),
  },
  {
    title: 'profile',
    path: '/profile',
    icon: icon('ic_cart'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
