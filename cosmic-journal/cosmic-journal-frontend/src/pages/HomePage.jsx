import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-4">
      <h2>Welcome to Cosmic Journal</h2>
      <p>Explore the stars and record your thoughts.</p>
      <Link to="/journal" className="bg-blue-500 text-white p-2 rounded">Start Writing</Link>
    </div>
  );
}

export default HomePage;