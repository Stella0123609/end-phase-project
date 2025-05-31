import React from 'react';

function ConstellationInfo({ constellation }) {
  return (
    <div className="p-4">
      <h3>Constellation: {constellation?.name || 'Unknown'}</h3>
      <p>Details: {constellation?.details || 'No details available'}</p>
    </div>
  );
}

export default ConstellationInfo;