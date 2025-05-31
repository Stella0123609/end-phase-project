import { useContext } from 'react';
import { JournalContext } from '../context/JournalContext';

export const useJournal = () => useContext(JournalContext);