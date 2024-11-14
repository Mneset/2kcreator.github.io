import React from 'react';
import limitlessRange from './images/limitlessRange.png'
import deadeye from './images/deadeye.png'
import shiftyShooter from './images/shiftyShooter.png'
import setShotSpecialist from './images/setShotSpecialist.png'
import posterizer from './images/posterizer.png'
import firstTeamAllLay from './images/firstTeamAllLay.png'
import physicalFinisher from './images/physicalFinisher.png'
import unpluckable from './images/unpluckable.png'
import ankleAssasian from './images/ankleAssasian.png'
import dimer from './images/dimer.png'
import lockdownDefender from './images/lockdownDefender.png'
import highFlyingDenier from './images/highFlyingDenier.png'
import cookies from './images/cookies.png'
import challenger from './images/challenger.png'
import speedster from './images/speedster.png'
import slipperyOffBall from './images/slipperyOffBall.png'
import blowBy from './images/blowBy.png'
import aerialWizard from './images/aerialWizard.png'
import pogoStick from './images/pogoStick.png'
import reboundChaser from './images/reboundChaser.png'



export default function Badges({ playerSkillRatings }) {

    const badges = [
        
        {
            name: "Limitless range",
            requiredSkill: 87,
            skillIndex: 0,
            imageUrl: limitlessRange,
            description: 'Extends the range from which a player can shoot three-pointers effectively from deep'
        },
        {
            name: "Deadeye",
            requiredSkill: 88,
            skillIndex: 0,
            imageUrl: deadeye,
            description: 'Jump shots taken with a defender closing out receive less of a penalty from a shot contest'
        },
        {
            name: "Shifty Shooter",
            requiredSkill: 84,
            skillIndex: 0,
            imageUrl: shiftyShooter,
            description: 'Improves a player\'s ability to successfully make off-the-dribble, high-difficulty jump shots.'
        },
        {
            name: "Set Shot Specialist",
            requiredSkill: 80,
            skillIndex: 0,
            imageUrl: setShotSpecialist,
            description: 'Boosts chances of knocking down stand-still jump shots'
        },
        {
            name: "Posterizer",
            requiredSkill: 86,
            skillIndex: 1,
            imageUrl: posterizer,
            description: 'Increases the chances of throwing down a dunk on your defender'
        },
        {
            name: "First Team All-Lay",
            requiredSkill: 91,
            skillIndex: 1,
            imageUrl: firstTeamAllLay,
            description: 'Increases the chances of making highly contested layups'
        },
        {
            name: "Physical Finisher",
            requiredSkill: 82,
            skillIndex: 1,
            imageUrl: physicalFinisher,
            description: 'Improves a player\'s ability to battle through contact and convert contact layups'
        },
        {
            name: "Unpluckable",
            requiredSkill: 80,
            skillIndex: 2,
            imageUrl: unpluckable,
            description: 'Defenders have a tougher time poking the ball free with their steal attempts'
        },
        {
            name: "Anke Assasian",
            requiredSkill: 87,
            skillIndex: 2,
            imageUrl: ankleAssasian,
            description: 'Increases the ability to break down the defender or cross them up'
        },
        {
            name: "Dimer",
            requiredSkill: 76,
            skillIndex: 2,
            imageUrl: dimer,
            description: 'When in the half-court, passes by Dimers to open shooters yield a shot percentage boost'
        },
        {
            name: "Lockdown Defender",
            requiredSkill: 84,
            skillIndex: 3,
            imageUrl: lockdownDefender,
            description: 'Strengthens a player\'s ability to effectively defend at all 3-levels, with an increased chance at stripping the opponent'
        },
        {
            name: "High Flying Denier",
            requiredSkill: 90,
            skillIndex: 3,
            imageUrl: highFlyingDenier,
            description: 'Boosts the speed and leaping ability of a defensive player in anticipation of a block attempt'
        },
        {
            name: "Cookies",
            requiredSkill: 88,
            skillIndex: 3,
            imageUrl: cookies,
            description: 'Increases the ability to successfully steal from ball-handlers, or strip layup attempts'
        },
        {
            name: "Challenger",
            requiredSkill: 78,
            skillIndex: 3,
            imageUrl: challenger,
            description: 'Improves the effectiveness of well-timed contests against perimeter shooters'
        },
        {
            name: "Speedster",
            requiredSkill: 86,
            skillIndex: 4,
            imageUrl: speedster,
            description: 'Blowing by your defender will earn you a boost to your speed for the remainder of the possession'
        },
        {
            name: "Slippery off-ball",
            requiredSkill: 81,
            skillIndex: 4,
            imageUrl: slipperyOffBall,
            description: 'When attempting to get open off screens, the player more effectively navigates through traffic'
        },
        {
            name: "Blow By",
            requiredSkill: 85,
            skillIndex: 4,
            imageUrl: blowBy,
            description: 'Speeds up launches when attacking from the perimeter'
        },
        {
            name: "Aerial Wizard",
            requiredSkill: 84,
            skillIndex: 5,
            ImageUrl: aerialWizard,
            description: 'Increases the ability to finish an alley-oop from a teammate, or putback a finish off an offensive rebound'
        },
        {
            name: "Pogo Stick",
            requiredSkill: 82,
            skillIndex: 5,
            imageUrl: pogoStick,
            description: 'Allows players to quickly go back up for another jump upon landing. This could be after a rebound, block attempt, or even jumpshot'
        },
        {
            name: "Rebound Chaser",
            requiredSkill: 83,
            skillIndex: 5,
            ImageUrl: reboundChaser,
            description: 'Improves a player\'s ability to track down rebounds from farther distances than normal'
        },
    ]

    const eligibleBadges = badges
        .filter(badge => playerSkillRatings[badge.skillIndex] >= badge.requiredSkill)
        .map(badge => (
            <div key={badge.name}>
                <img src={badge.imageUrl} alt={badge.name} style={{ width: '50px', height: '50px' }} className='badge-img' />
                
                <div className="info-box">
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                </div>
            </div>
        ))

    return (
        <div>
            <div style={{color: 'gold', textAlign: 'center'}}>
                <h3>Eligible Badges</h3>          
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'space-between', color: 'gold', alignContent: 'center' }}>
                {eligibleBadges.length > 0 ? eligibleBadges : <p>No eligible badges</p>}
            </div>
        </div>
    );
}