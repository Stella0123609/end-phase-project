import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cosmic to-black"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-starry mb-4">Welcome to Cosmic Journal</h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore the stars, record your thoughts, and connect with the universe.
        </p>
        <div className="space-x-4">
          <Link to="/journal">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Start Writing
            </motion.button>
          </Link>
          <Link to="/starmap-page">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              View Star Map
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;