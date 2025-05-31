import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      const response = await axios.get('http://localhost:8000/journal/all');
      setJournals(response.data);
    };
    fetchJournals();
  }, []);

  return (
    <div className="p-4">
      <h3>Your Journals</h3>
      {journals.map((journal) => (
        <div key={journal.id} className="border p-2 my-2">
          <p>{journal.content}</p>
          <p>{new Date(journal.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default JournalList;