import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
});

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const tokenRef = useRef(null); // Keeps track of token across renders

  useEffect(() => {
    tokenRef.current = token; // Sync tokenRef with the latest token

    // Request interceptor to attach access token
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization'] && token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle token refresh
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true; // Prevent infinite retry loop
          try {
            // Fetch new access token using refresh token
            const response = await axios.post(
              'https://api.example.com/refresh-token'
            );
            const { accessToken } = response.data;

            setToken(accessToken); // Update state
            tokenRef.current = accessToken; // Update ref immediately

            // Retry original request with new token
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return api(originalRequest);
          } catch (refreshError) {
            logout(); // If refresh fails, log out user
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [token]); // Runs when `token` changes

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post(
        'https://api.example.com/login',
        credentials
      );
      const { accessToken, user } = response.data;
      setToken(accessToken);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return { token, user, login, logout };
};
