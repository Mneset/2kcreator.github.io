import React, { useState, useEffect, } from 'react';
import ChartComponent from './ChartComponent';

export default function Form() {
    const [name, setName] = useState("")
    const [position, setPosition] = useState('PG')
    const [height, setHeight] = useState('6\'3')
    const [playerData, setPlayerData] = useState(null)

    const handleForm = (event) => {
        event.preventDefault()
        setPlayerData({
            name: name,
            position: position,
            height: height,
        })     
    }

    useEffect(() => {
        if (playerData) {
            console.log("Updated player data:", playerData);
        }
    }, [playerData]);

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
                <ChartComponent />
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
                                    <p>SHO: 78</p>
                                    <p>FIN: 89</p>
                                    <p>PLY: 85</p>
                                </div>
                                <div>
                                    <p>DEF: 67</p>
                                    <p>SPE: 92</p>
                                    <p>VER: 86</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
