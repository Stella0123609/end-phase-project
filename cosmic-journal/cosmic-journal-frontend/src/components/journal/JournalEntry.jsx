import React, { useState } from 'react';
import axios from 'axios';

function JournalEntry() {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/journal/create', { content });
    setContent('');
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your journal entry" className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white p-2">Save</button>
      </form>
    </div>
  );
}

export default JournalEntry;