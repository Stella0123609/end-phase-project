import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useStarMap from '../../hooks/useStarMap';
import LoadingSpinner from '../ui/LoadingSpinner';

function StarMap() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { starmap, loading, error } = useStarMap(latitude, longitude);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700"
    >
      <h3 className="text-xl font-semibold text-starry mb-4">Generate Star Map</h3>
      <div className="flex space-x-4 mb-4">
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
          placeholder="Latitude (-90 to 90)"
          className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
          placeholder="Longitude (-180 to 180)"
          className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {!loading && !error && starmap ? (
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-starry">
          {JSON.stringify(starmap)}
        </div>
      ) : !loading && !error ? (
        <p className="text-gray-400">Enter coordinates to generate a star map.</p>
      ) : null}
    </motion.div>
  );
}

export default StarMap;