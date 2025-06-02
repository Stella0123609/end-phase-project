import React from 'react';
   import { Radar } from 'react-chartjs-2';
   import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';

   ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

   const RadarChart = ({ data }) => {
     const chartData = {
       labels: data.labels || ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
       datasets: [
         {
           label: 'Performance',
           data: data.values || [65, 59, 90, 81, 56],
           backgroundColor: 'rgba(54, 162, 235, 0.2)',
           borderColor: 'rgba(54, 162, 235, 1)',
           borderWidth: 1,
         },
       ],
     };

     const options = {
       scales: { r: { beginAtZero: true } },
       plugins: { legend: { position: 'top' } },
     };

     return <Radar data={chartData} options={options} />;
   };

   export default RadarChart;