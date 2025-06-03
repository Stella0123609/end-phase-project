import React from 'react';

const moodConfig = {
  happy: {
    emoji: '😊',
    color: 'bg-yellow-400 hover:bg-yellow-500',
    activeColor: 'bg-yellow-500'
  },
  calm: {
    emoji: '😌',
    color: 'bg-blue-400 hover:bg-blue-500',
    activeColor: 'bg-blue-500'
  },
  excited: {
    emoji: '🤩',
    color: 'bg-red-400 hover:bg-red-500',
    activeColor: 'bg-red-500'
  },
  sad: {
    emoji: '😔',
    color: 'bg-gray-400 hover:bg-gray-500',
    activeColor: 'bg-gray-500'
  },
  anxious: {
    emoji: '😰',
    color: 'bg-purple-400 hover:bg-purple-500',
    activeColor: 'bg-purple-500'
  }
};

function MoodSelector({ mood, setMood }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(moodConfig).map(([moodKey, config]) => (
        <button
          key={moodKey}
          type="button"
          onClick={() => setMood(moodKey)}
          className={`flex items-center justify-center p-3 rounded-full text-xl transition-all ${mood === moodKey ? config.activeColor : config.color} ${mood === moodKey ? 'scale-110' : 'scale-100'}`}
          title={moodKey.charAt(0).toUpperCase() + moodKey.slice(1)}
        >
          {config.emoji}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;