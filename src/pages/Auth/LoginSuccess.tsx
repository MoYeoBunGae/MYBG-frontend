import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithKakao } from '@/api/auth';
import MYBGLogo from '@/assets/images/mybg-logo.png';

export default function LoginSuccess() {
  const navigate = useNavigate();
  const isExcuted = useRef(false);

  useEffect(() => {
    if (isExcuted.current) return;
    isExcuted.current = true;

    const urlParams = new URLSearchParams(window.location.search);
    const authToken = urlParams.get('token');

    if (authToken) {
      loginWithKakao(authToken)
        .then(() => {
          navigate('/mypage');
        })
        .catch((err) => {
          console.error('로그인 실패: ', err);
          navigate('/login');
        });
    } else {
      console.log('authToken 없음');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col bg-white h-screen overflow-y-auto">
      <div className="flex justify-center items-center h-full">
        <style>
          {`
          @keyframes reveal {
            0% { clip-path: inset(0 109% 0 0); }
            25% { clip-path: inset(0 75% 0 0); }
            50% { clip-path: inset(0 50% 0 0); }
            75% { clip-path: inset(0 25% 0 0); }
            100% { clip-path: inset(0 0 0 0); }
          }
        `}
        </style>
        <div className="flex flex-col items-center">
          <img
            className="w-1/2 animate-[reveal_1.75s_ease-in-out_infinite]"
            src={MYBGLogo}
            alt="모여번개"
          />
          <span className="h-[45px] py-5 mb-24 font-medium text-xs text-darkgray">
            로그인 중이에요…
          </span>
        </div>
      </div>
    </div>
  );
}
