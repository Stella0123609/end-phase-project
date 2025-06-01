import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StarMap() {
  const [starmap, setStarmap] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const fetchStarmap = async () => {
      const response = await axios.get(`http://localhost:8000/starmap/generate?latitude=${latitude}&longitude=${longitude}`);
      setStarmap(response.data);
    };
    fetchStarmap();
  }, [latitude, longitude]);

  return (
    <div className="p-4">
      <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Latitude" className="border p-2 mr-2" />
      <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Longitude" className="border p-2" />
      {starmap && <div>{JSON.stringify(starmap)}</div>}
    </div>
  );
}

export default StarMap;