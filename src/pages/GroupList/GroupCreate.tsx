import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ImageInput from '@/components/common/ImageInput';
import TextField from '@/components/common/TextField';
import NumberField from '@/components/common/NumberField';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';

export default function GroupCreate() {
  const navigate = useNavigate();
  const [coverImg, setCoverImg] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [num, setNum] = useState(10);
  const [onOff, setOnOff] = useState(true);
  const [nickname, setNickname] = useState('');

  const handleChangeImg = (files: File[]) => {
    setCoverImg(files);
  };

  const handleCreateGroup = () => {
    const info = {
      img: coverImg,
      title: title,
      num: num,
      nickname: nickname,
    };
    console.log('그룹 생성 : \n', info);
    navigate('/group/success');
  };

  return (
    <div className="bg-white h-screen overflow-y-auto overscroll-none">
      <Header
        pagename="새로운 그룹"
        variant="sub"
        hasBell={false}
        leftIcon="close"
        isCenter={true}
      />
      <div className="flex flex-col mx-3 my-4 gap-6">
        <div className="px-16">
          <ImageInput variant="only" onChange={handleChangeImg} />
        </div>
        <TextField
          value={title}
          placeholder="새로운 그룹 이름"
          maxLength={25}
          label="그룹 이름"
          onChange={setTitle}
        />
        <NumberField value={num} label="최대 인원" min={2} max={100} onChange={setNum} />
        <div className="px-2">
          <span className="font-semibold text-xs text-black84">그룹에서 사용할 닉네임</span>
          <div className="mt-2 px-1 py-3 rounded-sm bg-background text-sm">
            <div className="flex justify-between px-2">
              <div className="content-center">계정 이름 그대로 사용</div>
              <Toggle checked={onOff} onChange={setOnOff} />
            </div>
            {!onOff && (
              <div className="pt-3">
                <TextField
                  value={nickname}
                  placeholder="그룹 내 닉네임"
                  maxLength={10}
                  onlyLengthLabel
                  onChange={setNickname}
                />
              </div>
            )}
          </div>
        </div>
        <Button text="그룹 생성" onClick={handleCreateGroup} />
      </div>
    </div>
  );
}
