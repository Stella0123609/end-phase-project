import api from './api';

export const getStarMap = async (latitude, longitude) => {
  try {
    const response = await api.get(`/starmap/generate?latitude=${latitude}&longitude=${longitude}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch star map: ' + error.message);
  }
};