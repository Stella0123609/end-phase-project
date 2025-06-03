import React, { useState } from 'react';
import { motion } from 'framer-motion';

function JournalEntry() {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('2025-06-02');
  const [city, setCity] = useState('');
  const [mood, setMood] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!content || !city) {
      setError('Please provide journal content and city.');
      return;
    }

    // Mock saving to local storage
    const newEntry = {
      id: Date.now(),
      text: content,
      date,
      city,
      mood: mood || null,
    };

    const existingEntries = JSON.parse(localStorage.getItem('journals')) || [];
    localStorage.setItem('journals', JSON.stringify([...existingEntries, newEntry]));

    setContent('');
    setCity('');
    setMood('');
    setDate('2025-06-02');
    setSuccess('Journal entry saved successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cosmic to-black bg-opacity-80 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="relative z-10 p-6 max-w-2xl w-full mx-auto mt-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/50">
          <h2 className="text-3xl font-bold text-starry mb-6 text-center">New Journal Entry</h2>
          {success && <p className="text-green-400 mb-4 text-center">{success}</p>}
          {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="content" className="block text-starry mb-2 font-medium">Your Thoughts</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your thoughts under the stars..."
                className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-starry mb-2 font-medium">Date</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-starry mb-2 font-medium">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="mood" className="block text-starry mb-2 font-medium">Mood (Optional)</label>
              <input
                id="mood"
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="How are you feeling?"
                className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all duration-300"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-green-500/50"
            >
              Save Entry
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default JournalEntry;