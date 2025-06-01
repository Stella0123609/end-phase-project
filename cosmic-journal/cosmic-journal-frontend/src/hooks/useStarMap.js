import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarMap = (latitude, longitude) => {
  const [starmap, setStarmap] = useState(null);

  useEffect(() => {
    const fetchStarmap = async () => {
      const response = await axios.get(`http://localhost:8000/starmap/generate?latitude=${latitude}&longitude=${longitude}`);
      setStarmap(response.data);
    };
    fetchStarmap();
  }, [latitude, longitude]);

  return starmap;
};