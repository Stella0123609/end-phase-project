import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
        <Link to="/journal" className="text-white hover:text-gray-300">Journal</Link>
        <Link to="/starmap-page" className="text-white hover:text-gray-300">Star Map</Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;