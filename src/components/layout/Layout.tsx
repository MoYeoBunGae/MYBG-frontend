import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

const Layout = () => {
  return (
    <div className="bg-background h-screen overflow-y-auto">
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
