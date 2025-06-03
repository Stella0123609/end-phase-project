import React, { useState, useEffect } from 'react';

function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = () => {
      const storedJournals = JSON.parse(localStorage.getItem('journals')) || [];
      setJournals(storedJournals);
    };
    fetchJournals();
  }, []);

  const handleDelete = (id) => {
    const updatedJournals = journals.filter((journal) => journal.id !== id);
    setJournals(updatedJournals);
    localStorage.setItem('journals', JSON.stringify(updatedJournals));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-starry mb-4">Your Journal Entries</h2>
      {journals.length === 0 ? (
        <p className="text-starry">No journal entries found.</p>
      ) : (
        <ul className="space-y-4">
          {journals.map((journal) => (
            <li key={journal.id} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-starry flex justify-between items-start">
              <div>
                <p>{journal.text}</p>
                <p className="text-sm text-gray-400">
                  {journal.date} | {journal.city}
                </p>
              </div>
              <button
                onClick={() => handleDelete(journal.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300 ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JournalList;