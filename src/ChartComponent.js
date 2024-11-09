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
  scales,
} from 'chart.js'; 
import dragDataPlugin from 'chartjs-plugin-dragdata';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  dragDataPlugin
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
            beginAtZero: false,
            min: 30,
            max: 99,
        }
    },
    plugins: {
      dragData: {
        round: 1,
        dragX: true,
        onDrag: (e, datasetIndex, index, value) => {
          const cappedValue = Math.min(value, skillCaps[index]); // Cap value at skill cap
          const updatedPlayerSkillRatings = [...PlayerSkillRatings];
          updatedPlayerSkillRatings[index] = cappedValue; // Update specific skill
          setPlayerSkillRatings(updatedPlayerSkillRatings); // Update state
        },
      },
      title: {
        display: true, 
        text: 'Player Skill Ratings',
        color: "gold" 
      },
    },
  };


  return <Bar data={data} options={options} />;
};