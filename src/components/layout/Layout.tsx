import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

const Layout = () => {
  return (
    <div className="bg-background h-screen overflow-y-auto">
      <div className="pb-24">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;
