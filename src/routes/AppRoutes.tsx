import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '@/routes/routes';
import Layout from '@/components/layout/Layout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes
            .filter((route) => route.layout)
            .map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Route>

        {routes
          .filter((route) => !route.layout)
          .map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
