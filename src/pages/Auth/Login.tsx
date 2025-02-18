import Background from '@/assets/images/background.png';
import MYBGLogo from '@/assets/images/mybg-logo.png';
import KakaoSymbol from '@/assets/images/kakao-symbol.png';

const Login = () => {
  return (
    <div
      className="flex flex-col bg-white bg-cover bg-center h-screen overflow-y-auto"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex justify-center items-center h-full">
        <img className="w-1/2" src={MYBGLogo} alt="" />
      </div>
      <div className="w-full px-8 mb-24">
        <button className="flex items-center w-full h-[45px] p-[14px] rounded-[6px] bg-[#FEE500]">
          <img className="w-[18px] h-[18px] mr-2" src={KakaoSymbol} alt="" />
          <span className="flex-1 font-medium text-lg text-center text-[#000000]/85">
            카카오로 시작하기
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
