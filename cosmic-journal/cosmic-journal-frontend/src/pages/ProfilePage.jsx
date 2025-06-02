import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/auth/AuthProvider';
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, signOut } from '../firebase';
import { motion } from 'framer-motion';
import { FaUserCircle, FaSignOutAlt, FaEdit, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user, login } = useContext(AuthContext) || {};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await userCredential.user.updateProfile({ displayName });
      await login(email, password);
    } catch (error) {
      setError(error.message || 'Signup failed. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      await login(null, null, idToken);
    } catch (error) {
      setError(error.message || 'Google login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    setError('');
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message || 'Logout failed. Please try again.');
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    if (!displayName.trim()) {
      setError('Display name cannot be empty.');
      return;
    }
    try {
      if (user) {
        await user.updateProfile({ displayName: displayName.trim() });
        setIsEditing(false);
      }
    } catch (error) {
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4 sm:p-6"
    >
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-5xl sm:text-6xl text-blue-400 mb-4" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Profile</h1>
        </div>
        {!user ? (
          <>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-200 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
              >
                Login
              </motion.button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-400">or</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full mt-2 bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300"
              >
                Login with Google
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-center">Don’t have an account?</p>
              <form onSubmit={handleSignup} className="space-y-4 mt-2">
                <div>
                  <label htmlFor="displayName" className="block text-gray-200 mb-2">Display Name</label>
                  <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    autoComplete="name"
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Choose a display name"
                  />
                </div>
                <div>
                  <label htmlFor="signupEmail" className="block text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    id="signupEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="signupPassword" className="block text-gray-200 mb-2">Password</label>
                  <input
                    type="password"
                    id="signupPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-300"
                >
                  Sign Up
                </motion.button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4 text-gray-200">
              <div className="group p-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <p className="text-sm text-gray-400">Name</p>
                {isEditing ? (
                  <form onSubmit={handleUpdateProfile} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      autoComplete="name"
                      className="w-full p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Save
                    </motion.button>
                  </form>
                ) : (
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{user.displayName || 'User'}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                      <FaEdit />
                    </button>
                  </div>
                )}
              </div>
              <div className="group p-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-semibold">{user.email || 'Not provided'}</p>
              </div>
              <div className="group p-2 rounded-lg hover:bg-gray-700 transition duration-300">
                <p className="text-sm text-gray-400">Joined</p>
                <p className="text-lg font-semibold">
                  {user.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : 'Unknown'}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="w-full mt-6 bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300"
            >
              Logout
            </motion.button>
          </>
        )}
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
      </div>
    </motion.div>
  );
};

export default ProfilePage;