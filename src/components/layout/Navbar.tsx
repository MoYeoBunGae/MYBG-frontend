import { Link, useLocation } from 'react-router-dom';
import PeopleIcon from '@/assets/icons/people-filled.svg?react';
import ThunderIcon from '@/assets/icons/thunder.svg?react';
import ProfileDefault from '@/assets/images/profile.png';

const Navbar = () => {
  const location = useLocation();

  const user = {
    profileImg: '',
  };

  const navItems = [
    { to: '/', label: '그룹', Icon: PeopleIcon },
    { to: '/mybungae', label: '번개', Icon: ThunderIcon },
  ];

  return (
    <nav className="w-full fixed bottom-0 bg-white shadow-nav">
      <div className="flex justify-around pt-3 pb-10">
        {navItems.map(({ to, label, Icon }) => (
          <Link key={to} to={to} className="flex flex-col items-center text-xs gap-1.5">
            <Icon
              className={`w-7 h-7 ${location.pathname === to ? 'text-primary fill-primary' : 'text-darkgray'}`}
            />
            <span className={location.pathname === to ? 'text-primary' : 'text-darkgray'}>
              {label}
            </span>
          </Link>
        ))}

        <Link to="/mypage" className="flex flex-col items-center text-xs gap-1.5">
          <div
            className={`w-7 h-7 rounded-full border-[1.5px] bg-cover bg-center ${location.pathname === '/mypage' ? 'border-primary' : 'border-lightgray'}`}
            style={{ backgroundImage: `url(${user.profileImg || ProfileDefault})` }}
          />
          <span className={location.pathname === '/mypage' ? 'text-primary' : 'text-darkgray'}>
            계정
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
