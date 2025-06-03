import React, { useState } from 'react';

function StarMapPage() {
  const [starmap, setStarmap] = useState(null);
  const [city, setCity] = useState('');

  const mockStarmap = {
    constellations: [
      { name: "Orion", visible: true },
      { name: "Ursa Major", visible: true },
      { name: "Cassiopeia", visible: false },
    ],
  };

  const fetchStarmap = () => {
    if (!city) {
      alert('Please enter a city.');
      return;
    }
    // Mock the star map data based on city (simplified)
    setStarmap(mockStarmap);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-starry mb-4">Star Map</h2>
      <div className="mb-4">
        <label htmlFor="city" className="block text-starry mb-2">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., London)"
          className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-starry border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={fetchStarmap}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
      >
        Load Star Map
      </button>
      {starmap ? (
        <pre className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-starry">
          {JSON.stringify(starmap, null, 2)}
        </pre>
      ) : (
        <p className="text-starry">Enter a city to generate a star map.</p>
      )}
    </div>
  );
}

export default StarMapPage;