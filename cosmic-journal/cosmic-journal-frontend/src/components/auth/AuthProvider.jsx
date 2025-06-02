import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password, idToken) => {
    if (idToken) {
      setUser(await auth.currentUser);
    } else {
      await auth.signInWithEmailAndPassword(email, password);
      setUser(await auth.currentUser);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};