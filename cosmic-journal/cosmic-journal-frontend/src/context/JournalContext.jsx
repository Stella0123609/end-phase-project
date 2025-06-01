import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  const addJournal = (journal) => setJournals([...journals, journal]);

  return (
    <JournalContext.Provider value={{ journals, addJournal }}>
      {children}
    </JournalContext.Provider>
  );
};