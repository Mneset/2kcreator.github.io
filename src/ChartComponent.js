import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function ChartComponent({ skillCaps }) {
  const [PlayerSkillRatings, setPlayerSkillRatings] = useState(skillCaps);

  const data = {
    labels: ['Shooting', 'Finishing', 'Playmaking', 'Defending', 'Speed', 'Vertical'],
    datasets: [
      {
        label: 'Skill Caps', 
        data: skillCaps,
        backgroundColor: 'rgba(128, 0, 128, 0.5)', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false
      },
      {
        label: 'Player Skill Ratings', 
        data: PlayerSkillRatings, 
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
        },
        y: {
          ticks: {
            font: {
              size: 20,
              weight: 'bold'
            },
            color: 'gold'
          }
        }
    },
    plugins: {},
  };


  return <Bar data={data} options={options} />;
};