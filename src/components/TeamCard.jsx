import React from 'react'

const TeamCard = (props) => {
    return (
        <div className='team-card'>
            <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt='' />
            <h4>{props.pokemon.name}</h4>
            <div className="type-container">
                {props.pokemon.types.map((type, index) => {
                    return <h5 className={`${type.type.name} type`}>{type.type.name}</h5>
                })}
            </div>
            <div className="stat-container">
                {props.pokemon.stats.map((stats, index) => {
                    return <h5>{stats.stat.name}: {stats.base_stat}</h5>
                })}
            </div>
        </div>
    )
}

export default TeamCard