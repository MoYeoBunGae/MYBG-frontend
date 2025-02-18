import { ReactNode } from 'react';
import GroupList from '@/pages/GroupList';
import BungaeList from '@/pages/BungaeList';
import MyPage from '@/pages/MyPage';
import Login from '@/pages/Auth/Login';

interface RouteType {
  path: string;
  element: ReactNode;
  layout?: boolean;
}

const routes: RouteType[] = [
  { path: '/', element: <GroupList />, layout: true },
  { path: '/mybungae', element: <BungaeList />, layout: true },
  { path: '/mypage', element: <MyPage />, layout: true },
  { path: '/login', element: <Login />, layout: false },
];

export default routes;
