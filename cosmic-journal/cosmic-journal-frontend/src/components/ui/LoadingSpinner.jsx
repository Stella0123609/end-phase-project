import React from 'react';
import { motion } from 'framer-motion';

function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center items-center min-h-screen"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"
      />
    </motion.div>
  );
}

export default LoadingSpinner;