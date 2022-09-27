import React from 'react'
import TeamCard from './TeamCard'

const TeamSection = (props) => {
    return (
        <div className='team-section'>
            <h1>My Team</h1>
            <div className='team-container'>
                {props.team.map((pokemon, index) => {
                    return <TeamCard pokemon={pokemon} />
                })}
            </div>
        </div>
    )
}

export default TeamSection