import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard/index';



export const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
export const Courses = lazy(() => import('../pages/courses/Courses'));
export const Profile = lazy(() => import('../pages/profile/Profile'));
export const Settings= lazy(() => import('../pages/settings/Settings'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { path: 'courses', element: <Courses /> },
        { path: 'profile', element: <Profile /> },
        { path: 'settings', element: <Settings /> },
      ],
    },
  ]);

  return routes;
}
