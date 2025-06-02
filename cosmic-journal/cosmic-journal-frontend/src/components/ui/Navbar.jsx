import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../auth/AuthProvider';

function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cosmic to-black text-starry p-4 shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-300 transition duration-300">
            Cosmic Journal
          </NavLink>
        </div>
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition duration-300 ${isActive ? 'text-blue-300 font-semibold' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition duration-300 ${isActive ? 'text-blue-300 font-semibold' : ''}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/starmap-page"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition duration-300 ${isActive ? 'text-blue-300 font-semibold' : ''}`
                }
              >
                Star Map
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `hover:text-blue-300 transition duration-300 ${isActive ? 'text-blue-300 font-semibold' : ''}`
                }
              >
                Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-blue-300 transition duration-300 ${isActive ? 'text-blue-300 font-semibold' : ''}`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;