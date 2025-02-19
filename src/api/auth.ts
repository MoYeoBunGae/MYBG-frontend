import api from './index';
import { useAuthStore } from '@/store/authStore';

export const loginWithKakao = async (authToken: string) => {
  try {
    const response = await api.post('/auth', {
      oauthProvider: 'KAKAO',
      authToken,
    });

    const { accessToken, refreshToken, memberId: userId, memberName: userName } = response.data;
    const userProfileImage = '';

    useAuthStore.getState().setAuth({ accessToken, refreshToken });
    useAuthStore.getState().setUser({ userId, userName, userProfileImage });

    return response.data;
  } catch (error) {
    console.error('로그인 실패: ', error);
    throw error;
  }
};
