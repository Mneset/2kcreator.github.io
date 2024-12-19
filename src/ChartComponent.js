import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'; 
import dragDataPlugin from 'chartjs-plugin-dragdata';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 
import { log10 } from 'chart.js/helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  dragDataPlugin,
);

export default function ChartComponent({ skillCaps, PlayerSkillRatings, updateSkillRating }) {
  const [updatedSkillRatings, setUpdatedSkillRatings] = useState(PlayerSkillRatings);

  const handleIncrease = (index) => {
    updateSkillRating(index, 1);
};

const handleDecrease = (index) => {
    updateSkillRating(index, -1);
}; 

useEffect(() => {
  setUpdatedSkillRatings(PlayerSkillRatings);
}, [PlayerSkillRatings])

  const data = {
    labels: ['Shooting', 'Finishing', 'Playmaking', 'Defending', 'Speed', 'Vertical'],
    datasets: [
      {
        label: 'Skill Caps', 
        data: skillCaps,
        backgroundColor: 'rgba(128, 0, 128, 0.5)', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false,
        dragData: false
      },
      {
        label: 'Player Skill Ratings', 
        data: updatedSkillRatings, 
        backgroundColor: 'purple', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false,
        dragData: true
      },
      {
        label: 'Max Ratings', 
        data: [99, 99, 99, 99, 99, 99], 
        backgroundColor: 'black', 
        borderColor: 'gold', 
        borderWidth: 2,
        grouped: false,
        dragData: false
      }
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    dragData: true,
    scales: {
        x: {
            beginAtZero: true,
            max: 99,
            ticks: {
              max: 99,
              min: 0
            }
        },
        y: {
          ticks: {
            font: {
              size: 20,
              weight: 'bold'
            },
            color: 'gold'
          },
        }
    },
    plugins: {
      tooltip: {
        enabled: false
      },
      dragData: {
        round: 0,
        dragX: true,
        onDragEnd: (event, datasetIndex, index) => {
          if (datasetIndex === 1 && PlayerSkillRatings[index] > skillCaps[index]) {
            PlayerSkillRatings[index] = skillCaps[index]
          }
          updateSkillRating()
        }
      },
    },
  };


  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button className='increaseBtn' onClick={() => handleIncrease(0, 1)}>Increase Shooting</button>
        <button className='increaseBtn' onClick={() => handleIncrease(1, 1)}>Increase Finishing</button>
        <button className='increaseBtn' onClick={() => handleIncrease(2, 1)}>Increase Playmaking</button>
        <button className='increaseBtn' onClick={() => handleIncrease(3, 1)}>Increase Defending</button>
        <button className='increaseBtn' onClick={() => handleIncrease(4, 1)}>Increase Speed</button>
        <button className='increaseBtn' onClick={() => handleIncrease(5, 1)}>Increase Vertical</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button className='decreaseBtn' onClick={() => handleDecrease(0, -1)}>Decrease Shooting</button>
        <button className='decreaseBtn' onClick={() => handleDecrease(1, -1)}>Decrease Finishing</button>
        <button className='decreaseBtn' onClick={() => handleDecrease(2, -1)}>Decrease Playmaking</button>
        <button className='decreaseBtn' onClick={() => handleDecrease(3, -1)}>Decrease Defending</button>
        <button className='decreaseBtn' onClick={() => handleDecrease(4, -1)}>Decrease Speed</button>
        <button className='decreaseBtn' onClick={() => handleDecrease(5, -1)}>Decrease Vertical</button>
      </div>
      
      <Bar data={data} options={options} />

    </div>

  );
};