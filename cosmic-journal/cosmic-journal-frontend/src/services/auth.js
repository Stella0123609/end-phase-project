import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/token', { username: email, password });
  return response.data;
};

export const signup = async (email, password) => {
  await api.post('/auth/signup', { email, hashed_password: password });
};