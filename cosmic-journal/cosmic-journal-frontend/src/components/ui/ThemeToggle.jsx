import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-3 bg-gray-800 bg-opacity-50 text-starry rounded-full flex items-center space-x-2 hover:bg-gray-700 transition duration-300"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </motion.button>
  );
}

export default ThemeToggle;