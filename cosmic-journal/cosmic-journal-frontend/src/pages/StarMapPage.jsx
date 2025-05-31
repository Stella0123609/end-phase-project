import React from 'react';
import StarMap from '../components/starmap/StarMap';
import CelestialEvents from '../components/starmap/CelestialEvents';
import ConstellationInfo from '../components/starmap/ConstellationInfo';

function StarMapPage() {
  return (
    <div className="p-4">
      <h2>Star Map</h2>
      <StarMap />
      <CelestialEvents />
      <ConstellationInfo constellation={{ name: "Orion", details: "The Hunter" }} />
    </div>
  );
}

export default StarMapPage;