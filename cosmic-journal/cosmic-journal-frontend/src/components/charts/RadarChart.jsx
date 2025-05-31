import React from 'react';

function RadarChart({ data }) {
  return (
    <div className="p-4">
      <h3>Mood Trends</h3>
      <chartjs type="radar" data={{
        labels: ['Happy', 'Calm', 'Excited', 'Sad', 'Anxious'],
        datasets: [{
          label: 'Mood Trends',
          data: data || [5, 3, 7, 2, 4],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }],
      }} options={{
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      }} />
    </div>
  );
}

export default RadarChart;