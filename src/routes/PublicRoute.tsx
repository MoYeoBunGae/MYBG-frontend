import { useAuthStore } from '@/store/authStore';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
