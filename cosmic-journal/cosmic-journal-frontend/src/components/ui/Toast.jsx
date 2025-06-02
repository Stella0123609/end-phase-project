import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg shadow-lg border border-green-400"
    >
      {message}
    </motion.div>
  );
}

export default Toast;