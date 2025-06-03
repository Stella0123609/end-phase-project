import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  const addJournal = (journal) => {
    setJournals((prevJournals) => [...prevJournals, { ...journal, id: Date.now() }]);
  };

  const deleteJournal = (id) => {
    setJournals((prevJournals) => prevJournals.filter((journal) => journal.id !== id));
  };

  return (
    <JournalContext.Provider value={{ journals, addJournal, deleteJournal }}>
      {children}
    </JournalContext.Provider>
  );
};