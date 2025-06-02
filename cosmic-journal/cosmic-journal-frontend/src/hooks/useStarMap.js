import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; 

const useStarMap = (latitude, longitude, city = null) => {
  const { token } = useAuth();
  const [starmap, setStarmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStarmap = async () => {
    if (!token) {
      setError('Please log in to fetch the starmap.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const params = city ? { city } : { latitude, longitude };
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/starmap/generate`,
        {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStarmap(response.data.star_map);
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to fetch starmap.');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ((latitude !== undefined && longitude !== undefined) || city) {
      fetchStarmap();
    }
  }, [latitude, longitude, city, token]);

  return { starmap, loading, error, fetchStarmap };
};

export default useStarMap;