import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Header from '@/components/layout/Header';
import TabMenu from '@/components/group/TabMenu';

const group = {
  groupId: 1,
  Name: '무엇이든 축하하는 그룹',
  ProfileImage: 'https://i.pinimg.com/564x/aa/a8/c8/aaa8c83eedd7e0321ee132f4e357d5aa.jpg',
  totalNumber: 12,
};

const groupTabs = [
  { name: '홈', path: '' },
  { name: '번개로그', path: 'bungae-log' },
  { name: '스토리', path: 'story' },
];

export default function GroupHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { targetRef, isVisible } = useIntersectionObserver();

  const [activeTab, setActiveTab] = useState('홈');

  useEffect(() => {
    const currentTab = groupTabs.find(
      (tab) => location.pathname === `/group/${group.groupId}/${tab.path}`
    );

    if (currentTab) setActiveTab(currentTab.name);
  }, [location.pathname]);

  const handleTabChange = (tabPath: string) => {
    navigate(`/group/${group.groupId}/${tabPath}`, { replace: true });

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background h-screen overflow-y-auto overscroll-none">
      <div className={`absolute top-0 w-full z-1 ${!isVisible && 'bg-white'} `}>
        <Header
          pagename={!isVisible ? group.Name : ''}
          variant="sub"
          hasBell={false}
          leftIcon="back"
          rightIcon="menu"
          isWhiteText={isVisible}
        />
      </div>

      {group.ProfileImage && (
        <div
          className="relative flex flex-col justify-end pb-5 bg-cover aspect-square"
          style={{ backgroundImage: `url(${group.ProfileImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 from-10% via-black/0 to-black/20 to-95% "></div>
          <div ref={targetRef} className="z-1 w-full px-4 font-bold text-xl text-white truncate">
            {group.Name}
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className={`w-full z-2 ${isVisible ? 'relative' : 'sticky top-11 bg-white'}`}
      >
        <TabMenu
          tabs={groupTabs.map((tab) => tab.name)}
          activeTab={activeTab}
          setActiveTab={(tabName) => {
            const selectedTab = groupTabs.find((tab) => tab.name === tabName);
            if (selectedTab) handleTabChange(selectedTab.path);
          }}
        />
      </div>

      <Outlet />
    </div>
  );
}
