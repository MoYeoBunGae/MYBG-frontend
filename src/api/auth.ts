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

export const reissueAccessToken = async () => {
  try {
    const currentRefreshToken = useAuthStore.getState().refreshToken;

    const response = await api.post('/auth/reissue', { currentRefreshToken });

    const { accessToken, refreshToken } = response.data;
    useAuthStore.getState().setAuth({ accessToken, refreshToken });

    return accessToken;
  } catch (error) {
    console.error('Access Token 재발급 실패: ', error);
    throw error;
  }
};

export const logoutFromServer = async () => {
  try {
    const response = await api.post('/auth/logout');
    if (response.status === 200) {
      useAuthStore.getState().logout();
    }

    return response;
  } catch (error) {
    console.error('로그아웃 실패: ', error);
    throw error;
  }
};
