import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cosmic to-black"
    >
      <div className="text-center">
        <h2 className="text-6xl font-bold text-starry mb-4">404</h2>
        <p className="text-2xl text-gray-400 mb-6">Lost in the Cosmos? Page Not Found</p>
        <p className="text-lg text-gray-300 mb-8">
          The page you’re looking for doesn’t exist. Let’s guide you back to the stars!
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Return to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;