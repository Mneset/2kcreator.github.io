import React, { useState, useEffect } from 'react';
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

export default function ChartComponent({ skillCaps, PlayerSkillRatings }) {
  const [updatedSkillRatings, setUpdatedSkillRatings] = useState(PlayerSkillRatings);

useEffect(() => {
  if (skillCaps && Array.isArray(skillCaps)) {
      setUpdatedSkillRatings(skillCaps.map(cap => cap * 0.2));
  }
}, [skillCaps]);

  const updateSkillRating = (index, change) => {
    setUpdatedSkillRatings((prevRatings) => {
      const newRatings = [...prevRatings];
      newRatings[index] = Math.min(skillCaps[index], Math.max(0, newRatings[index] + change));
      return newRatings;
    });
  };

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
        data: updatedSkillRatings, 
        backgroundColor: 'purple', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false
      },
      {
        label: 'Max Ratings', 
        data: [99, 99, 99, 99, 99, 99], 
        backgroundColor: 'black', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false
      }
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


  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <div>
        <button className='increaseBtn' onClick={() => updateSkillRating(0, 1)}>Increase Shooting</button>
        <button className='increaseBtn' onClick={() => updateSkillRating(1, 1)}>Increase Finishing</button>
        <button className='increaseBtn' onClick={() => updateSkillRating(2, 1)}>Increase Playmaking</button>
        <button className='increaseBtn' onClick={() => updateSkillRating(3, 1)}>Increase Defending</button>
        <button className='increaseBtn' onClick={() => updateSkillRating(4, 1)}>Increase Speed</button>
        <button className='increaseBtn' onClick={() => updateSkillRating(5, 1)}>Increase Vertical</button>
      </div>
      <div>
        <button className='decreaseBtn' onClick={() => updateSkillRating(0, -1)}>Decrease Shooting</button>
        <button className='decreaseBtn' onClick={() => updateSkillRating(1, -1)}>Decrease Finishing</button>
        <button className='decreaseBtn' onClick={() => updateSkillRating(2, -1)}>Decrease Playmaking</button>
        <button className='decreaseBtn' onClick={() => updateSkillRating(3, -1)}>Decrease Defending</button>
        <button className='decreaseBtn' onClick={() => updateSkillRating(4, -1)}>Decrease Speed</button>
        <button className='decreaseBtn' onClick={() => updateSkillRating(5, -1)}>Decrease Vertical</button>
      </div>
      
      <Bar data={data} options={options} />

    </div>

  );
};