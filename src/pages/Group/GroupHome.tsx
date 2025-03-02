import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Header from '@/components/layout/Header';
import TabMenu from '@/components/group/TabMenu';

const group = {
  groupId: 2,
  Name: '무엇이든 축하하는 그룹',
  ProfileImage: 'https://i.pinimg.com/564x/aa/a8/c8/aaa8c83eedd7e0321ee132f4e357d5aa.jpg',
  totalNumber: 12,
};
const groupTabs = ['홈', '번개로그', '스토리'];

export default function GroupHome() {
  const [activeTab, setActiveTab] = useState(groupTabs[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { targetRef, isVisible } = useIntersectionObserver();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

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
        <TabMenu tabs={groupTabs} activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      <div className="h-screen flex items-center justify-center text-2xl">
        {activeTab === '홈' && <HomeContent />}
        {activeTab === '번개로그' && <LightningLogContent />}
        {activeTab === '스토리' && <StoryContent />}
      </div>
    </div>
  );
}

const HomeContent = () => (
  <div className="bg-red-100 w-full h-full flex justify-center items-center">🏠 홈 콘텐츠</div>
);
const LightningLogContent = () => (
  <div className="bg-green-100 w-full h-full flex justify-center items-center">
    ⚡ 번개로그 콘텐츠
  </div>
);
const StoryContent = () => (
  <div className="bg-blue-100 w-full h-full flex justify-center items-center">📖 스토리 콘텐츠</div>
);
