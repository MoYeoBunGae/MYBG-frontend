import { ReactNode } from 'react';
import ProetectedRoute from '@/routes/ProetectedRoute';
import PublicRoute from '@/routes/PublicRoute';
import GroupList, { GroupCreate } from '@/pages/GroupList';
import BungaeList from '@/pages/BungaeList';
import MyPage from '@/pages/MyPage';
import Login from '@/pages/Auth/Login';
import LoginSuccess from '@/pages/Auth/LoginSuccess';

interface RouteType {
  path: string;
  element: ReactNode;
  layout?: boolean;
}

const proetectedRoutes: RouteType[] = [
  { path: '/', element: <GroupList />, layout: true },
  { path: '/mybungae', element: <BungaeList />, layout: true },
  { path: '/mypage', element: <MyPage />, layout: true },
  { path: '/group/post', element: <GroupCreate />, layout: false },
].map((route) => ({
  ...route,
  element: <ProetectedRoute>{route.element}</ProetectedRoute>,
}));

const publicRoutes: RouteType[] = [
  { path: '/login', element: <Login />, layout: false },
  { path: '/login-success', element: <LoginSuccess />, layout: false },
].map((route) => ({
  ...route,
  element: <PublicRoute>{route.element}</PublicRoute>,
}));

const routes: RouteType[] = [
  ...proetectedRoutes,
  ...publicRoutes,
  // { path : "*", element: <Navigate to="/" replace />},
];

export default routes;
