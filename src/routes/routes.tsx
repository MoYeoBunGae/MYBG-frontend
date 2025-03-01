import { ReactNode } from 'react';
import ProetectedRoute from '@/routes/ProetectedRoute';
import PublicRoute from '@/routes/PublicRoute';
import { Login, LoginSuccess } from '@/pages/Auth';
import { BungaeList, GroupList, MyPage } from '@/pages/My';
import { GroupCreate, GroupCreateSuccess } from '@/pages/Group';

interface RouteType {
  path: string;
  element: ReactNode;
  layout: boolean;
}

const proetectedRoutes: RouteType[] = [
  { path: '/', element: <GroupList />, layout: true },
  { path: '/mybungae', element: <BungaeList />, layout: true },
  { path: '/mypage', element: <MyPage />, layout: true },
  { path: '/group/post', element: <GroupCreate />, layout: false },
  { path: '/group/success', element: <GroupCreateSuccess />, layout: false },
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
