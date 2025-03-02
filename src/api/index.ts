import axios from 'axios';
import { reissueAccessToken } from '@/api/auth';
import { useAuthStore } from '@/store/authStore';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  // headers: {},
  timeout: 20000,
});

const EXCLUDED_AUTH_ENDPOINTS = ['/auth', '/auth/reissue'];

api.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    const isExcluded = EXCLUDED_AUTH_ENDPOINTS.includes(config.url || '');

    if (accessToken && !isExcluded) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await reissueAccessToken();
        const refreshToken = useAuthStore.getState().refreshToken;

        useAuthStore.getState().setAuth({ accessToken: newAccessToken, refreshToken });

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (reissueError) {
        console.error('코드 재발급 실패:', reissueError);
        useAuthStore.getState().logout();
        return Promise.reject(reissueError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
