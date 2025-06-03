import React, { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSocialLogin = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      await login(null, null, idToken);
      navigate('/journal');
    } catch (error) {
      setError(error.message || 'An error occurred during login.');
      console.error('Login failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/journal');
    } catch (error) {
      setError(error.detail || 'Failed to log in');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cosmic to-black"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-starry mb-6 text-center">Login to Cosmic Journal</h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-starry mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-starry mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <button
          onClick={handleSocialLogin}
          className="w-full mt-4 bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-300"
        >
          Login with Google
        </button>
      </div>
    </motion.div>
  );
}

export default Login;