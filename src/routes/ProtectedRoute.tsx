import { useAuthStore } from '@/store/authStore';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
