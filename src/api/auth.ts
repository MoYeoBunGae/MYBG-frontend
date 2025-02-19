import api from './index';

export const loginWithKakao = async (authToken: string) => {
  try {
    const response = await api.post('/auth', {
      oauthProvider: 'KAKAO',
      authToken,
    });

    return response.data;
  } catch (error) {
    console.error('로그인 실패: ', error);
    throw error;
  }
};
