import React from 'react';
import { motion } from 'framer-motion';

function ConstellationInfo({ constellation }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg border border-gray-700"
    >
      <h3 className="text-xl font-semibold text-starry mb-2">Constellation: {constellation?.name || 'Unknown'}</h3>
      <p className="text-gray-300">Details: {constellation?.details || 'No details available'}</p>
    </motion.div>
  );
}

export default ConstellationInfo;