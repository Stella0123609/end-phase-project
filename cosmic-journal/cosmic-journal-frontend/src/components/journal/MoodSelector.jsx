import React from 'react';

function MoodSelector({ mood, setMood }) {
  const moods = ['happy', 'calm', 'excited', 'sad', 'anxious'];

  return (
    <div className="flex space-x-2">
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          className={`p-2 rounded ${mood === m ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;