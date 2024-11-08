import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import the Bar chart component from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js'; // Import necessary Chart.js components

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent() {

  const data = {
    labels: ['Shooting', 'Finishing', 'Playmaking', 'Defending', 'Speed', 'Vertical'],
    datasets: [
      {
        label: 'Attributes', 
        data: [25, 25, 25, 25, 25, 25], 
        backgroundColor: 'purple', 
        borderColor: 'gold', 
        borderWidth: 2,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
        x: {
            beginAtZero: true,
            max: 99,
        }
    },
    plugins: {
      title: {
        display: true, 
        text: 'Player Skill Ratings',
        color: "gold" 
      },
    },
  };

  return <Bar data={data} options={options} />;
};