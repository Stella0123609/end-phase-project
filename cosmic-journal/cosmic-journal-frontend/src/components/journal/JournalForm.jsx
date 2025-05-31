import React, { useState } from 'react';
import MoodSelector from './MoodSelector';

function JournalForm({ onSubmit }) {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content, mood });
    setContent('');
    setMood('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your journal entry" className="border p-2 w-full" />
      <MoodSelector mood={mood} setMood={setMood} />
      <button type="submit" className="bg-green-500 text-white p-2">Save Entry</button>
    </form>
  );
}

export default JournalForm;