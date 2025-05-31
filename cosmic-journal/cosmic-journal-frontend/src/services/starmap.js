import api from './api';

export const getStarMap = async (latitude, longitude) => {
  const response = await api.get(`/starmap/generate?latitude=${latitude}&longitude=${longitude}`);
  return response.data;
};