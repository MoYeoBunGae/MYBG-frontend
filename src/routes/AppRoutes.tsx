import { useRoutes } from 'react-router-dom';
import routes from '@/routes/routes';

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
