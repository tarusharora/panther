import { apiClient } from '../utils/client';

export const login = async (email, password) => {
  try {
    const data = await apiClient.post('http://localhost:10010/auth/login', {
      email,
      password
    });
    return data;
  } catch {}
};
