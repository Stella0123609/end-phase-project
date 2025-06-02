import React, { useState } from 'react';
import MoodSelector from './MoodSelector';
import { motion } from 'framer-motion';

function JournalForm({ onSubmit }) {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content, mood });
    setContent('');
    setMood('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-2xl mx-auto"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-starry mb-4">Create a Journal Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your journal entry"
            className="w-full p-4 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
          />
          <MoodSelector mood={mood} setMood={setMood} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-300"
          >
            Save Entry
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default JournalForm;