import React from 'react';
import JournalList from '../components/journal/JournalList';
import RadarChart from '../components/charts/RadarChart';

function DashboardPage() {
  return (
    <div className="p-4">
      <h2>Dashboard</h2>
      <RadarChart />
      <JournalList />
    </div>
  );
}

export default DashboardPage;