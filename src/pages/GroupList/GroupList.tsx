import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import LetterEmoji from '@/assets/emojis/letter.svg?react';
import PeopleEmoji from '@/assets/emojis/people.svg?react';

const groups = [
  {
    groupId: 1,
    Name: '아주 멋진 이름을 가진 그룹',
    ProfileImage: '',
    totalNumber: 20,
  },
  {
    groupId: 2,
    Name: '무엇이든 축하하는 그룹',
    ProfileImage: 'https://i.pinimg.com/564x/aa/a8/c8/aaa8c83eedd7e0321ee132f4e357d5aa.jpg',
    totalNumber: 12,
  },
];

export default function GroupList() {
  return (
    <>
      <Header pagename="그룹" />
      <div className="mx-4 mt-3">
        <div className="flex gap-3 mb-4">
          <Button text="새로운 그룹 생성" variant="withIcon" color="white" icon={<PeopleEmoji />} />
          <Button text="초대 코드 입력" variant="withIcon" icon={<LetterEmoji />} />
        </div>
        <div className="px-3 py-4 mb-4 bg-white rounded-md text-sm">
          <div className="mb-4 font-bold text-black20">나의 그룹</div>
          {groups.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {groups.map((group, index) => (
                <div key={index} className="flex flex-col gap-2 mb-1">
                  <div className="aspect-square rounded-md border border-lightgray overflow-hidden">
                    {group.ProfileImage && (
                      <img
                        src={group.ProfileImage}
                        alt="그룹 커버 사진"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <span>
                    <div className="mb-0.5 font-medium truncate">{group.Name}</div>
                    <div className="text-xs text-black84">멤버 {group.totalNumber}명</div>
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-2 text-black84 text-center"> 아직 가입한 그룹이 없어요 </div>
          )}
        </div>
      </div>
    </>
  );
}
