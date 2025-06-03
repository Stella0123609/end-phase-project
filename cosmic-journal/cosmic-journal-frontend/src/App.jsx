import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import AppRoutes from './AppRoutes.jsx';
import { AuthProvider } from './components/auth/AuthProvider';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <div className="pt-16">
            <AppRoutes />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}