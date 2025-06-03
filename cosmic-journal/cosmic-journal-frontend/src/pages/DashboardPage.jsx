import React from 'react';
import JournalList from '../components/journal/JournalList';
import RadarChart from '../components/charts/RadarChart';
import { motion } from 'framer-motion';

function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen p-6 max-w-6xl mx-auto bg-gradient-to-br from-cosmic to-black"
    >
      <h2 className="text-4xl font-bold text-starry mb-8 text-center">Your Cosmic Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700"
        >
          <h3 className="text-2xl text-starry mb-4">Mood Trends</h3>
          <RadarChart data={{ values: [5, 3, 7, 2, 4] }} />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700"
        >
          <h3 className="text-2xl text-starry mb-4">Your Journal Entries</h3>
          <JournalList />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DashboardPage;