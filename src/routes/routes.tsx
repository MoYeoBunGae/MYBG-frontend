import { ReactNode } from 'react';
import ProtectedRoute from '@/routes/ProtectedRoute';
import PublicRoute from '@/routes/PublicRoute';
import Layout from '@/components/layout/Layout';
import { Login, LoginSuccess } from '@/pages/Auth';
import { BungaeList, GroupList, MyPage } from '@/pages/My';
import {
  BungaeLogContent,
  GroupCreate,
  GroupCreateSuccess,
  GroupHome,
  HomeContent,
  StoryContent,
} from '@/pages/Group';

interface RouteType {
  path: string;
  element: ReactNode;
  layout?: boolean;
  children?: Omit<RouteType, 'layout'>[];
}

const protectedRoutes: RouteType[] = [
  { path: '/', element: <GroupList />, layout: true },
  { path: '/mybungae', element: <BungaeList />, layout: true },
  { path: '/mypage', element: <MyPage />, layout: true },
  { path: '/group/post', element: <GroupCreate />, layout: false },
  { path: '/group/success', element: <GroupCreateSuccess />, layout: false },
  {
    path: '/group/:id/*',
    element: <GroupHome />,
    layout: false,
    children: [
      { path: '', element: <HomeContent /> },
      { path: 'bungae-log', element: <BungaeLogContent /> },
      { path: 'story', element: <StoryContent /> },
    ],
  },
].map((route) => ({
  ...route,
  element: <ProtectedRoute>{route.element}</ProtectedRoute>,
}));

const publicRoutes: RouteType[] = [
  { path: '/login', element: <Login />, layout: false },
  { path: '/login-success', element: <LoginSuccess />, layout: false },
].map((route) => ({
  ...route,
  element: <PublicRoute>{route.element}</PublicRoute>,
}));

const routes: RouteType[] = [
  {
    path: '/',
    element: <Layout />,
    children: protectedRoutes.filter((route) => route.layout),
  },
  ...protectedRoutes.filter((route) => !route.layout),
  ...publicRoutes,
];
export default routes;
