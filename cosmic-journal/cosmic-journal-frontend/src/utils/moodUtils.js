export const getMoodColor = (mood) => ({
  happy: '#FFD700',
  calm: '#1E90FF',
  excited: '#FF4500',
  sad: '#708090',
  anxious: '#800080',
}[mood] || '#808080');