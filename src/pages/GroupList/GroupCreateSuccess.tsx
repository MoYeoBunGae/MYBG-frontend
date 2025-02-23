import Confetti from 'react-confetti';
import { copyToClipboard } from '@/utils/clipboard';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import TicketEmoji from '@/assets/emojis/ticket.svg?react';

export default function GroupCreateSuccess() {
  const group = {
    img: '',
    title: '아주 멋진 이름을 가진 그룹',
    code: 'CKDJF23DFG',
  };

  const handleStartGroup = () => {
    copyToClipboard(group.code);
  };

  return (
    <div className="bg-white h-screen overflow-y-auto overscroll-none">
      <Header pagename={group.title} variant="main" hasBell={false} />
      <div className="flex flex-col mx-3 my-4 gap-6">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          gravity={0.85}
          colors={['#FFD752', '#FFB543', '#FFF']}
          recycle={false}
        />

        <div className="mx-16 relative aspect-square rounded-md border border-lightgray overflow-hidden cursor-pointer">
          {group.img && (
            <img src={group.img} alt="커버 사진 미리보기" className="w-full h-full object-cover" />
          )}
        </div>

        <div className="grid px-2 gap-1 text-sm">
          <div className="flex pb-1">
            <label className="flex-1 font-semibold text-black">그룹 초대 코드</label>
          </div>
          <div className="flex items-center w-full min-h-10 px-3 py-2.5 gap-3 rounded-sm bg-background text-darkgray focus:outline-none placeholder-black84 resize-none overflow-hidden">
            <TicketEmoji />
            <div className="flex-1">{group.code}</div>
            <div
              className="text-primary cursor-pointer hover:underline"
              onClick={() => copyToClipboard(group.code)}
            >
              복사
            </div>
          </div>
        </div>

        <Button text="초대 코드 복사하고 시작" onClick={handleStartGroup} />
      </div>
    </div>
  );
}
