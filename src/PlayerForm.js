import React, { useState, useEffect, } from 'react';
import ChartComponent from './ChartComponent';

export default function Form() {
    const [name, setName] = useState("")
    const [position, setPosition] = useState('PG')
    const [height, setHeight] = useState('6\'3')
    const [playerData, setPlayerData] = useState(null)
    const [skillCaps, setSkillCaps] = useState();
    
    const baseStatsByPosition = {
        PG: [75, 60, 85, 50, 85, 70],
        SG: [80, 70, 80, 60, 80, 65],
        SF: [70, 80, 75, 70, 75, 75],
        PF: [60, 85, 65, 85, 65, 80],
        C: [50, 90, 60, 90, 55, 85],
    };

    const scalingFactorsByHeight = {
        "5'8": [1.2, 1.1, 1.1, 0.9, 1.3, 1.3],
        "5'9": [1.18, 1.1, 1.1, 0.92, 1.28, 1.28],
        "5'10": [1.16, 1.08, 1.08, 0.94, 1.25, 1.25],
        "5'11": [1.14, 1.07, 1.07, 0.96, 1.22, 1.22],
        "6'0": [1.12, 1.05, 1.05, 0.98, 1.2, 1.2],
        "6'1": [1.1, 1.03, 1.03, 1.0, 1.18, 1.18],
        "6'2": [1.08, 1.02, 1.02, 1.02, 1.15, 1.15],
        "6'3": [1.1, 1.0, 1.0, 1.0, 1.1, 1.1],
        "6'4": [1.05, 0.98, 0.98, 1.03, 1.08, 1.08],
        "6'5": [1.04, 0.96, 0.96, 1.04, 1.05, 1.05],
        "6'6": [1.02, 0.95, 0.95, 1.06, 1.03, 1.03],
        "6'7": [1.0, 0.94, 0.94, 1.08, 1.0, 1.0],
        "6'8": [0.98, 0.93, 0.93, 1.1, 0.98, 0.98],
        "6'9": [0.96, 0.9, 0.9, 1.12, 0.95, 0.95],
        "6'10": [0.94, 0.88, 0.88, 1.14, 0.92, 0.92],
        "6'11": [0.92, 0.87, 0.87, 1.16, 0.9, 0.9],
        "7'0": [0.9, 0.85, 0.85, 1.18, 0.88, 0.88],
        "7'1": [0.88, 0.84, 0.84, 1.2, 0.85, 0.85],
        "7'2": [0.86, 0.83, 0.83, 1.22, 0.82, 0.82],
    };    

    const calculateSkillCaps = () => {
        const baseStats = baseStatsByPosition[position] || [50, 50, 50, 50, 50, 50];
        const scalingFactors = scalingFactorsByHeight[height] || [1, 1, 1, 1, 1, 1];

        return baseStats.map((baseValue, index) => {
            const scaledValue = baseValue * scalingFactors[index];
            return Math.min(99, Math.round(scaledValue));
        });
    };

    useEffect(() => {
        if (playerData) {
            calculateSkillCaps();
        }
    }, [playerData]);

    const handleForm = (event) => {
        event.preventDefault();
        setPlayerData({
            name: name,
            position: position,
            height: height,
        });
        setSkillCaps(calculateSkillCaps());
    };

    return (
        <div className='player-creator'>
            <div className='step-1'>
                <h2>Create your MyPlayer</h2>
                <p className='info'>Welcome to the "MyPlayer Creator Lab". Here you will be able to create and customize your own personalized player.</p>
                <p className='step'>Step 1:</p>
                <p className='info'>Start by choosing you name, position and height. Different heights, positions, and combination of the two will have different skill caps, and result in different playstyles and badges to choose between later on. </p>
                <p className='step'>Step 2:</p>
                <p className='info'>Choose you player's stats by deciding what attributes you want to increase with the skillpoints you are given.</p>
                <p className='step'>Step 3:</p>
                <p className='info'>Now decide what playstyle your player is going to have. Depending on what playstyle you choose, you will be given the opportunity to choose between different badges that will act as attribute boosts for your player</p>
                <form onSubmit={handleForm} className='player-form'>
                <label>Name:</label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)} placeholder='Enter a player name'
                />
                <label>Position:</label>
                <select
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                >
                    <option value={"PG"}>PG</option>
                    <option value={"SG"}>SG</option>
                    <option value={"SF"}>SF</option>
                    <option value={"PF"}>PF</option>
                    <option value={"C"}>C</option>
                </select>
                <label>Height:</label>
                <select
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                >
                        <option value="5'8">5'8</option>
                        <option value="5'9">5'9</option>
                        <option value="5'10">5'10</option>
                        <option value="5'11">5'11</option>
                        <option value="6'0">6'0</option>
                        <option value="6'1">6'1</option>
                        <option value="6'2">6'2</option>
                        <option value="6'3">6'3</option>
                        <option value="6'4">6'4</option>
                        <option value="6'5">6'5</option>
                        <option value="6'6">6'6</option>
                        <option value="6'7">6'7</option>
                        <option value="6'8">6'8</option>
                        <option value="6'9">6'9</option>
                        <option value="6'10">6'10</option>
                        <option value="6'11">6'11</option>
                        <option value="7'0">7'0</option>
                        <option value="7'1">7'1</option>
                        <option value="7'2">7'2</option>
                </select>
                <button type='submit' className='create-player-btn'>Create Player</button>
                </form>
            </div>
            <div className='step-2'>
                <ChartComponent skillCaps={skillCaps}/>
            </div>
            <div className='step-3'>              
                {playerData && (
                    <div className="player-card">
                        <div className='playercard-header'>
                            <h3>{playerData.name}</h3>
                        </div>
                        <div className='playercard-footer'>
                            <div className='footer-info-wrapper'>
                                <div className='footer-info'>
                                    <p>{playerData.position}</p>
                                </div>
                                <div className='footer-info'>
                                    <p>{playerData.height}</p>
                                </div>
                            </div>
                            <div className='footer-stats-wrapper'>
                                <div>
                                    <p>SHO: {skillCaps[0]}</p>
                                    <p>FIN: {skillCaps[1]}</p>
                                    <p>PLY: {skillCaps[2]}</p>
                                </div>
                                <div>
                                    <p>DEF: {skillCaps[3]}</p>
                                    <p>SPE: {skillCaps[4]}</p>
                                    <p>VER: {skillCaps[5]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
