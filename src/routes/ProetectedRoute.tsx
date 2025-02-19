import { useAuthStore } from '@/store/authStore';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProetectedRouteProps {
  children: ReactNode;
}

const ProetectedRoute = ({ children }: ProetectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? children : <Navigate to="/login" replace />;
};

export default ProetectedRoute;
