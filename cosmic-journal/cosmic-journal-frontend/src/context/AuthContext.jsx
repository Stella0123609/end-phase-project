import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        email,
        password,
      });
      setUser({ email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Signup failed' };
    }
  };

  const login = async (email, password, idToken = null) => {
    try {
      let response;
      if (idToken) {
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/google-login`, {
          id_token: idToken,
        });
      } else {
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/token`, {
          username: email,
          password,
        });
      }
      const { access_token } = response.data;
      setToken(access_token);
      setUser({ email: email || response.data.user_email });
      localStorage.setItem('token', access_token);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Login failed' };
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    token,
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);