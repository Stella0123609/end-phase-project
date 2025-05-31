export const getMoodColor = (mood) => ({
    happy: 'yellow',
    calm: 'blue',
    excited: 'red',
    sad: 'gray',
    anxious: 'purple',
  }[mood] || 'gray');