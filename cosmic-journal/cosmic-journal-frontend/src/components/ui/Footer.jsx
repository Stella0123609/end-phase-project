import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-cosmic to-black p-4 text-starry text-center border-t border-gray-700"
    >
      <p>© 2025 Cosmic Journal. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;