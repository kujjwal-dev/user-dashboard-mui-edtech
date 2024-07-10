import SvgColor from '../../components/svg-color/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'courses',
    path: '/courses',
    icon: icon('ic_courses'),
  },
  {
    title: 'user profile',
    path: '/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'progress',
    path: '/progress',
    icon: icon('ic_progress'),
  },{
    title: 'Content Searches',
    path: '/contentSearches',
    icon: icon('ic_search'),
  }
];

export default navConfig;

