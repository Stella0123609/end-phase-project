import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import AppRoutes from './routes.jsx';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;