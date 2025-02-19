import Background from '@/assets/images/background.png';
import MYBGLogo from '@/assets/images/mybg-logo.png';
import KakaoSymbol from '@/assets/images/kakao-symbol.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `${API_BASE_URL}/security/oauth2/authorization/kakao`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div
      className="flex flex-col bg-white bg-cover bg-center h-screen overflow-y-auto"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex justify-center items-center h-full">
        <img className="w-1/2" src={MYBGLogo} alt="모여번개" />
      </div>
      <div className="w-full px-8 mb-24">
        <button
          className="flex items-center w-full h-[45px] p-[14px] rounded-[6px] bg-[#FEE500]"
          onClick={handleKakaoLogin}
        >
          <img className="size-[18px] mr-2" src={KakaoSymbol} alt="카카오 Symbol" />
          <span className="flex-1 font-medium text-lg text-center text-[#000000]/85">
            카카오로 시작하기
          </span>
        </button>
      </div>
    </div>
  );
}
