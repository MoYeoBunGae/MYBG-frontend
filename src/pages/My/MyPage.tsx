import { useNavigate } from 'react-router-dom';
import { logoutFromServer } from '@/api/auth';
import { useAuthStore } from '@/store/authStore';
import ProfileDefault from '@/assets/images/profile.png';
import KakaoSymbol from '@/assets/images/kakao-symbol.png';
import DoorEmoji from '@/assets/emojis/door.svg?react';
import SkeletonEmoji from '@/assets/emojis/skeleton.svg?react';
import Header from '@/components/layout/Header';

export default function MyPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const handleLogout = async () => {
    try {
      await logoutFromServer();
      navigate('/login');
    } catch (error) {
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  const handleDeleteAccount = () => {
    alert('회원탈퇴');
  };

  const listItems = [
    { Emoji: DoorEmoji, label: '로그아웃', action: handleLogout },
    { Emoji: SkeletonEmoji, label: '회원탈퇴', action: handleDeleteAccount },
  ];

  return (
    <div className="bg-white" style={{ height: 'calc(100vh - 96px)' }}>
      <Header pagename="마이페이지" />
      <div className="mx-4 mt-3">
        <div className="flex flex-col items-center py-5 gap-3 rounded-md bg-background shadow-first">
          <img
            className="object-cover size-20 rounded-full"
            src={user.userProfileImage || ProfileDefault}
            alt="프로필사진"
          />
          <div className="flex items-center gap-1.5">
            <div className="flex justify-center items-center size-5 rounded-full bg-[#FEE500]">
              <img className="size-3" src={KakaoSymbol} alt="카카오 Symbol" />
            </div>
            <span className="font-semibold">{user.userName}</span>
          </div>
        </div>

        <div className="w-full mt-4 mb-2 border border-background" />

        <div className="">
          {listItems.map(({ Emoji, label, action }, index) => (
            <div
              key={index}
              className="flex items-center p-3 mb-1 gap-3 cursor-pointer"
              onClick={action}
            >
              <Emoji className="size-7" />
              <span className="text-black60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
